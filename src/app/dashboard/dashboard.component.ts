import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  geolocationName: string;
  unitSymbol: string;
  temperatureSymbol: string;
  unitMeasurement: UnitsMeasurement;
  geolocationState: EmptyState;

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
      geolocationName: ReverseGeocoderApiResponse[]
    }) => {
      if (data.weather) {
        this.currentWeather = data.weather.current;
        this.hourlyWeather = data.weather.hourly.slice(0, 8);
        this.dailyWeather = data.weather.daily;
        this.airPollutionIndex = data.airPollution.list[0].main.aqi;

        this.setGeolocationName(this.getFullGeolocationName(data.geolocationName));
      } else if (this.dashboardService.getGeolocationAccess()) {
        this.geolocationState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else {
        this.geolocationState = this.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(geolocationStatus => {
      if (geolocationStatus === 'granted') {
        this.geolocationGranted();
      } else if (geolocationStatus === 'denied') {
        this.currentWeather = undefined;
        this.airPollutionIndex = undefined;
        this.geolocationState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
        this.geolocationDenied();
      } else { // geolocationStatus === prompt
        this.currentWeather = undefined;
        this.airPollutionIndex = undefined;
        this.geolocationState = this.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationPositionChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(() => {
      this.setWeatherData(this.unitMeasurement);
      this.setAirPollutionData();
      this.setGeolocationName();
    });

    this.setUnitAndTempSymbols(UnitsMeasurement.imperial);
  }

  onTempChanged(unitMeasurement: UnitsMeasurement): void {
    this.setWeatherData(unitMeasurement);
    this.setAirPollutionData(); // just to update the air pollution data, this call is not needed
  }

  allowGeolocation(): void {
    this.dashboardService.requestGeolocation();
  }

  geolocationGranted(): void {
    this.dashboardService.geoLocationGranted().then((isPositionEnabled) => {
      if (isPositionEnabled) {
        this.setWeatherData(this.unitMeasurement);
        this.setAirPollutionData();
        this.setGeolocationName();
      } else {
        this.geolocationState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      }
    });
  }
  geolocationDenied(): void {
    this.dashboardService.geolocationDenied();
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

  private setGeolocationName(placeName?: string): void {
    this.geolocationName = this.dashboardService.getGeolocationName();

    if (!this.geolocationName && placeName) {
      this.geolocationName = placeName;
    } else if (!this.geolocationName && !placeName) {
      this.dashboardService.getGeolocationNameWithOpenWeatherApi().subscribe(reverseGeo => {
        this.geolocationName = this.getFullGeolocationName(reverseGeo);
      });
    }
  }

  private getFullGeolocationName(reverseGeo: ReverseGeocoderApiResponse[]): string {
    const geolocationNameResp = reverseGeo[0];
    return geolocationNameResp && geolocationNameResp.state ? `${geolocationNameResp?.name}, ${geolocationNameResp?.state}` : `${geolocationNameResp?.name}`;
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
