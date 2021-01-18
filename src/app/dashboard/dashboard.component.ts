import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { Current, Daily, OpenWeatherApiResponse } from './openweather-api.model';
import { DashboardService } from './dashboard.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentWeather: Current;
  hourlyWeather: Current[];
  dailyWeather: Daily[];
  airPollutionIndex: number;
  unitSymbol: string;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setWeatherData();
    this.setAirPollutionData();
    this.setUnitSymbol(UnitsMeasurement.imperial);
  }

  /* Using the DashboardResolver */
  private setWeatherData(): void {
    this.route.data.pipe(
      map(data => {
        return data.openWeatherApiResponse as OpenWeatherApiResponse;
      })
    ).subscribe(weather => {
      this.currentWeather = weather.current;
      this.hourlyWeather = weather.hourly.slice(0, 8);
      this.dailyWeather = weather.daily;
    });
  }

  private setAirPollutionData(): void {
    this.dashboardService.getAirPollution(29.7858, -95.8244)
      .subscribe(airPollution => {
        this.airPollutionIndex = airPollution.list[0].main.aqi;
      });
  }

  private setUnitSymbol(units: UnitsMeasurement): void {
    if (units === UnitsMeasurement.standard || units === UnitsMeasurement.metric) {
      this.unitSymbol = 'm/s';
    } else {
      this.unitSymbol = 'mph';
    }
  }

}
