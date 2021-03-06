import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { OpenWeatherApiService } from '../core/api/openweather-api.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import {
  OpenWeatherApiResponse,
  AirPollutionApiResponse,
  ReverseGeocoderApiResponse
} from '../core/api/openweather-api.model';
import { GeolocationApiService } from '../core/services/geolocation-api.service';
import { GeolocationPosition } from '../shared/models/geolocation-position.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  geolocationStatusChanged$ = this.geolocationApiService.geolocationStatusChanged$;
  geolocationPositionChanged$ = this.geolocationApiService.geolocationPositionChanged$;
  geolocationNameChanged$ = this.geolocationApiService.geolocationNameChanged$;

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private geolocationApiService: GeolocationApiService,
  ) { }

  getCurrentWeather(unit?: UnitsMeasurement): Observable<OpenWeatherApiResponse> {
    const geoLocationPosition = this.getGeolocationPosition();
    if (geoLocationPosition) {
      return this.openWeatherApiService.getCurrentAndForecastWeather(
        geoLocationPosition.coords.latitude,
        geoLocationPosition.coords.longitude,
        unit
      );

      // return this.openWeatherApiService.getStaticCurrentAndForecastWeather(unit);
    }

    return of(undefined);
  }

  getAirPollution(): Observable<AirPollutionApiResponse> {
    const geoLocationPosition = this.getGeolocationPosition();
    if (geoLocationPosition) {
      return this.openWeatherApiService.getAirPollutionInfo(
        geoLocationPosition.coords.latitude,
        geoLocationPosition.coords.longitude,
      );

      // return this.openWeatherApiService.getStaticAirPollutionInfo();
    }

    return of(undefined);
  }

  getGeolocationNameWithOpenWeatherApi(): Observable<ReverseGeocoderApiResponse[]> {
    const geoLocationPosition = this.getGeolocationPosition();
    if (geoLocationPosition) {
      return this.openWeatherApiService.getLocationNameByCoords(
        geoLocationPosition.coords.latitude,
        geoLocationPosition.coords.longitude,
      );
    }

    return of(undefined);
  }

  isGeolocationBlocked(): boolean {
    return this.geolocationApiService.getGeolocationStatus() === 'denied';
  }

  requestGeolocation(): void {
    this.geolocationApiService.requestGeolocation();
  }

  async geoLocationGranted(): Promise<boolean> {
    return await this.geolocationApiService.setGeolocation();
  }

  private getGeolocationPosition(): GeolocationPosition {
    return this.geolocationApiService.getGeolocationPosition();
  }

}
