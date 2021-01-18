import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { OpenWeatherApiService } from '../core/api/openweather-api.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import { OpenWeatherApiResponse, AirPollutionApiResponse } from './openweather-api.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private openWeatherApiService: OpenWeatherApiService) { }

  getCurrentWeather(lat: number, lon: number, units?: UnitsMeasurement): Observable<OpenWeatherApiResponse> {
    // return this.openWeatherApiService.getStaticCurrentAndForecastWeather(lat, lon, units);
    return this.openWeatherApiService.getCurrentAndForecastWeather(lat, lon, units);
  }

  getAirPollution(lat: number, lon: number): Observable<AirPollutionApiResponse> {
    // return this.openWeatherApiService.getStaticAirPollutionInfo(lat, lon);
    return this.openWeatherApiService.getAirPollutionInfo(lat, lon);
  }
}
