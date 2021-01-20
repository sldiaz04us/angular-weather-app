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
  temperatureSymbol: string;
  unitMeasurement: UnitsMeasurement;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  /* Using the DashboardResolver */
    this.route.data.pipe(
      map(data => {
        return data.openWeatherApiResponse as OpenWeatherApiResponse;
      })
    ).subscribe(weather => {
      this.currentWeather = weather.current;
      this.hourlyWeather = weather.hourly.slice(0, 8);
      this.dailyWeather = weather.daily;
    });

    this.setAirPollutionData();
    this.setUnitAndTempSymbols(UnitsMeasurement.imperial);
  }

  onTempChanged(unitMeasurement: UnitsMeasurement): void {
    this.setWeatherData(unitMeasurement);
    this.setAirPollutionData(); // just to update the air pollution data, this call is not needed
  }


  private setWeatherData(unitMeasurement: UnitsMeasurement): void {
    this.dashboardService.getCurrentWeather(unitMeasurement)
      .subscribe(weather => {
        this.currentWeather = weather.current;
        this.hourlyWeather = weather.hourly.slice(0, 8); // get only 8 hours forecast
        this.dailyWeather = weather.daily;
        this.setUnitAndTempSymbols(unitMeasurement);
      });
  }

  private setAirPollutionData(): void {
    this.dashboardService.getAirPollution()
      .subscribe(airPollution => {
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
