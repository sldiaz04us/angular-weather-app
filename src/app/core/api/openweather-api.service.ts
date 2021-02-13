import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { OpenWeatherApiResponse, AirPollutionApiResponse, ReverseGeocoderApiResponse } from './openweather-api.model';
import { UnitsMeasurement } from '../../shared/enums/units-measurement.enum';
import {
  staticWeatherDataInCelsius,
  staticWeatherDataInFahrenheit,
  staticAirPollutionData
} from './openweather-mock.data';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  private currentWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
  private airPollutionApiUrl = 'https://api.openweathermap.org/data/2.5/air_pollution?';
  private reverseGeocoderUrl = 'https://api.openweathermap.org/geo/1.0/reverse?';

  constructor(private http: HttpClient) { }

  getCurrentAndForecastWeather(lat: number, lon: number, units: UnitsMeasurement = UnitsMeasurement.imperial)
    : Observable<OpenWeatherApiResponse> {
    return this.http.get<OpenWeatherApiResponse>(`${this.currentWeatherApiUrl}lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=${environment.openWeatherApiKey}`);
  }
  getStaticCurrentAndForecastWeather(units: UnitsMeasurement = UnitsMeasurement.imperial): Observable<OpenWeatherApiResponse> {
    if (units === UnitsMeasurement.imperial) {
      return of(staticWeatherDataInFahrenheit);
    }
    return of(staticWeatherDataInCelsius);
  }

  getAirPollutionInfo(lat: number, lon: number): Observable<AirPollutionApiResponse> {
    return this.http.get<AirPollutionApiResponse>(`${this.airPollutionApiUrl}lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}`);
  }
  getStaticAirPollutionInfo(): Observable<AirPollutionApiResponse> {
    return of(staticAirPollutionData);
  }

  getLocationNameByCoords(lat: number, lon: number): Observable<ReverseGeocoderApiResponse[]> {
    return this.http.get<ReverseGeocoderApiResponse[]>(`${this.reverseGeocoderUrl}lat=${lat}&lon=${lon}&appid=${environment.openWeatherApiKey}`);
  }
}
