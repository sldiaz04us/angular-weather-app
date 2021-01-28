import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.service';
import {
  Current,
  Daily,
  OpenWeatherApiResponse,
  AirPollutionApiResponse
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
  unitSymbol: string;
  temperatureSymbol: string;
  unitMeasurement: UnitsMeasurement;
  emptyState: EmptyState;

  private geolocationPermissionSubs: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /* Using Resolvers */
    this.route.data.subscribe((data: {
      weather: OpenWeatherApiResponse,
      airPollution: AirPollutionApiResponse
    }) => {
      if (data.weather) {
        this.currentWeather = data.weather.current;
        this.hourlyWeather = data.weather.hourly.slice(0, 8);
        this.dailyWeather = data.weather.daily;
        this.airPollutionIndex = data.airPollution.list[0].main.aqi;
      } else if (this.dashboardService.getGeolocationStatus() === 'denied') {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.geolocationPermissionSubs = this.dashboardService.geolocationStatusChanged$
      .subscribe(geolocationStatus => {
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

    this.setUnitAndTempSymbols(UnitsMeasurement.imperial);
  }

  onTempChanged(unitMeasurement: UnitsMeasurement): void {
    this.setWeatherData(unitMeasurement);
    this.setAirPollutionData(); // just to update the air pollution data, this call is not needed
  }

  locationGranted(): void {
    this.dashboardService.setGeolocationPosition().then((isPositionEnabled) => {
      if (isPositionEnabled) {
        this.setWeatherData(this.unitMeasurement);
        this.setAirPollutionData();
      } else {
        this.emptyState = this.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      }
    });
  }

  allowLocation(): void {
    this.dashboardService.setGeolocationPosition();
  }

  ngOnDestroy(): void {
    if (this.geolocationPermissionSubs) {
      this.geolocationPermissionSubs.unsubscribe();
    }
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
