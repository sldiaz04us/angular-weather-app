import { Component, OnInit } from '@angular/core';

import { Current, Daily } from './openweather-api.model';
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
  unitSymbol: string;
  airPollutionIndex: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getCurrentWeather(29.7858, -95.8244, UnitsMeasurement.imperial).subscribe(weather => {
      this.currentWeather = weather.current;
      this.hourlyWeather = weather.hourly.slice(0, 8);
      this.dailyWeather = weather.daily;
      this.setUnitSymbol(UnitsMeasurement.imperial);
    });

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
