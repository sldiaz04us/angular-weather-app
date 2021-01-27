import { Injectable } from '@angular/core';

import { PermissionsService } from '@ng-web-apis/permissions';

import { Observable, of, Subject } from 'rxjs';

import { OpenWeatherApiService } from '../core/api/openweather-api.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import {
  OpenWeatherApiResponse,
  AirPollutionApiResponse
} from '../core/api/openweather-api.model';
import { GeolocationApiService } from '../core/services/geolocation-api.service';
import { GeolocationPosition, GeolocationPositionError } from '../shared/models/geolocation-position.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private geoLocationStatusChanged = new Subject<string>();
  geoLocationStatusChanged$: Observable<string>;

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private geolocationApiService: GeolocationApiService,
    private readonly permissions: PermissionsService
  ) {
    this.geoLocationStatusChanged$ = this.geoLocationStatusChanged.asObservable();

    this.permissions.state('geolocation').subscribe(geolocationStatus => {
      this.geoLocationStatusChanged.next(geolocationStatus);
    });
  }

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

  getGeolocationPositionError(): GeolocationPositionError {
    return this.geolocationApiService.getGeolocationPositionError();
  }

  async setGeolocationPosition(): Promise<boolean> {
    return await this.geolocationApiService.setLocation();
  }

  private getGeolocationPosition(): GeolocationPosition {
    return this.geolocationApiService.getGeolocationPosition();
  }
}
