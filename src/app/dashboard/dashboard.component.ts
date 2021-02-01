import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

import { DashboardService } from './dashboard.service';
import {
  Current,
  Daily,
  OpenWeatherApiResponse,
  AirPollutionApiResponse,
  ReverseGeocoderApiResponse
} from '../core/api/openweather-api.model';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import { EmptyState } from '../shared/models/empty-state.model';
import { emptyStates } from '../shared/constants/empty-states.assets';
import { EmptyStateTypes } from '../shared/enums/empty-states.enum';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentWeather: Current;
  hourlyWeather: Current[];
  dailyWeather: Daily[];
  airPollutionIndex: number;
  locationName: string;
  unitSymbol: string;
  temperatureSymbol: string;
  unitMeasurement: UnitsMeasurement;
  emptyState: EmptyState;

  private subsNotifier = new Subject();

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* Using Resolvers */
    this.route.data.subscribe((data: {
      weather: OpenWeatherApiResponse,
      airPollution: AirPollutionApiResponse,
      locationName: ReverseGeocoderApiResponse[]
    }) => {
      if (data.weather) {
        this.currentWeather = data.weather.current;
        this.hourlyWeather = data.weather.hourly.slice(0, 8);
        this.dailyWeather = data.weather.daily;
        this.airPollutionIndex = data.airPollution.list[0].main.aqi;

        this.setLocationName();
      } else if (this.dashboardService.getGeolocationStatus() === 'denied') {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(geolocationStatus => {
      if (geolocationStatus === 'granted') {
        this.locationGranted();
      } else if (geolocationStatus === 'denied') {
        this.currentWeather = undefined;
        this.airPollutionIndex = undefined;
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else { // geolocationStatus === prompt
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationPositionChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(() => {
      this.setWeatherData(this.unitMeasurement);
      this.setAirPollutionData();
      this.setLocationName();
    });

    this.setUnitAndTempSymbols(UnitsMeasurement.imperial);
  }

  onTempChanged(unitMeasurement: UnitsMeasurement): void {
    this.setWeatherData(unitMeasurement);
    this.setAirPollutionData(); // just to update the air pollution data, this call is not needed
  }

  allowLocation(): void {
    this.locationGranted();
  }

  locationGranted(): void {
    this.dashboardService.setGeolocationPosition().then((isPositionEnabled) => {
      if (isPositionEnabled) {
        this.setWeatherData(this.unitMeasurement);
        this.setAirPollutionData();
        this.setLocationName();
      } else {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      }
    });
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

  private setWeatherData(unitMeasurement: UnitsMeasurement): void {
    this.dashboardService.getCurrentWeather(unitMeasurement).subscribe(weather => {
      this.currentWeather = weather.current;
      this.hourlyWeather = weather.hourly.slice(0, 8); // get only 8 hours forecast
      this.dailyWeather = weather.daily;
      this.setUnitAndTempSymbols(unitMeasurement);
    });
  }

  private setAirPollutionData(): void {
    this.dashboardService.getAirPollution().subscribe(airPollution => {
      this.airPollutionIndex = airPollution.list[0].main.aqi;
    });
  }

  private setLocationName(): void {
    this.locationName = this.dashboardService.getGeoLocationName();
    if (!this.locationName) {
      this.dashboardService.getLocationNameWithOpenWeatherApi().subscribe(reverseGeo => {
        this.locationName = this.getFullLocationName(reverseGeo);
      });
    }
  }
  private getFullLocationName(reverseGeo: ReverseGeocoderApiResponse[]): string {
    const locationNameResp = reverseGeo[0];
    return locationNameResp && locationNameResp.state ? `${locationNameResp?.name}, ${locationNameResp?.state}` : `${locationNameResp?.name}`;
  }

  private setUnitAndTempSymbols(unit: UnitsMeasurement): void {
    this.unitMeasurement = unit;
    if (unit === UnitsMeasurement.metric) {
      this.unitSymbol = 'm/s';
      this.temperatureSymbol = '°C';
    } else {
      this.unitSymbol = 'mph';
      this.temperatureSymbol = '°F';
    }
  }

  private getEmptyState(emptyStateType: EmptyStateTypes): EmptyState {
    return emptyStates.find(state => state.id === emptyStateType);
  }
}
