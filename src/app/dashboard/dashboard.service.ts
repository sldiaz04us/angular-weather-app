import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';

import { GeolocationService } from '@ng-web-apis/geolocation';

import { OpenWeatherApiService } from '../core/api/openweather-api.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import { OpenWeatherApiResponse, AirPollutionApiResponse } from './openweather-api.model';


interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number;
}
interface GeolocationCoordinates {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private readonly geolocation$: GeolocationService
  ) { }

  getCurrentWeather(unit?: UnitsMeasurement): Observable<OpenWeatherApiResponse> {
    return this.geolocation$.pipe(
      take(1),
      switchMap((position: GeolocationPosition) => {
        return this.openWeatherApiService.getCurrentAndForecastWeather(
          position.coords.latitude,
          position.coords.longitude,
          unit
        );
      })
    );
    // return this.openWeatherApiService.getStaticCurrentAndForecastWeather(unit);
  }

  getAirPollution(): Observable<AirPollutionApiResponse> {
    return this.geolocation$.pipe(
      take(1),
      switchMap((position: GeolocationPosition) => {
        return this.openWeatherApiService.getAirPollutionInfo(
          position.coords.latitude,
          position.coords.longitude,
        );
      })
    );
    // return this.openWeatherApiService.getStaticAirPollutionInfo();
  }
}
