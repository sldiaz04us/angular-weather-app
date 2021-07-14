import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DashboardService } from './dashboard.service';
import {
  Current,
  Daily,
  OpenWeatherApiResponse,
  AirPollutionApiResponse
} from '../core/api/openweather-api.model';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import { EmptyState } from '../shared/models/empty-state.model';
import { EmptyStateTypes } from '../shared/enums/empty-states.enum';
import { EmptyStateService } from '../core/services/empty-state.service';

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
    private route: ActivatedRoute,
    private emptyStateService: EmptyStateService,
    title: Title
  ) {
    title.setTitle('Dashboard - Weather App');
  }

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
      } else if (this.dashboardService.isGeolocationBlocked()) {
        this.geolocationState = this.emptyStateService.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else {
        this.geolocationState = this.emptyStateService.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(geolocationStatus => {
      if (geolocationStatus === 'granted') {
        this.geolocationGranted();
      } else if (geolocationStatus === 'denied') {
        this.currentWeather = undefined;
        this.airPollutionIndex = undefined;
        this.geolocationState = this.emptyStateService.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
      } else { // geolocationStatus === prompt
        this.currentWeather = undefined;
        this.airPollutionIndex = undefined;
        this.geolocationState = this.emptyStateService.getEmptyState(EmptyStateTypes.GPS);
      }
    });

    this.dashboardService.geolocationPositionChanged$.pipe(takeUntil(this.subsNotifier))
      .subscribe(() => {
        this.setWeatherData(this.unitMeasurement);
        this.setAirPollutionData();
      });

    this.dashboardService.geolocationNameChanged$.pipe(takeUntil(this.subsNotifier))
      .subscribe(geolocationName => this.geolocationName = geolocationName);

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
      } else {
        this.geolocationState = this.emptyStateService.getEmptyState(EmptyStateTypes.GPS_BLOCKED);
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
}
