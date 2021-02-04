import { Injectable, OnDestroy } from '@angular/core';

import { PermissionsService } from '@ng-web-apis/permissions';

import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OpenWeatherApiService } from '../core/api/openweather-api.service';
import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import {
  OpenWeatherApiResponse,
  AirPollutionApiResponse,
  ReverseGeocoderApiResponse
} from '../core/api/openweather-api.model';
import { GeolocationApiService } from '../core/services/geolocation-api.service';
import { GeolocationPosition, GeolocationPositionError } from '../shared/models/geolocation-position.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnDestroy {
  private geolocationStatusSubject = new Subject<string>();
  geolocationStatusChanged$: Observable<string>;

  private geolocationPositionSubject = new Subject<void>();
  geolocationPositionChanged$: Observable<void>;

  private subsNotifier = new Subject();

  constructor(
    private openWeatherApiService: OpenWeatherApiService,
    private geolocationApiService: GeolocationApiService,
    private readonly permissions: PermissionsService
  ) {
    this.geolocationStatusChanged$ = this.geolocationStatusSubject.asObservable();
    this.geolocationPositionChanged$ = this.geolocationPositionSubject.asObservable();

    this.permissions.state('geolocation').pipe(takeUntil(this.subsNotifier))
      .subscribe(geolocationStatus => {
        console.log('GeolocationStatus:', geolocationStatus);
        this.geolocationStatusSubject.next(geolocationStatus);
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

  getGeolocationName(): string {
    return this.geolocationApiService.getGeolocationName();
  }
  setGeolocationName(locationName: string): void {
    this.geolocationApiService.setGeolocationName(locationName);
  }

  getGeolocationPositionError(): GeolocationPositionError {
    return this.geolocationApiService.getGeolocationPositionError();
  }

  requestGeolocation(): void {
    this.geolocationApiService.requestGeolocation();
  }

  async geoLocationGranted(): Promise<boolean> {
    return await this.geolocationApiService.setGeolocation();
  }
  geolocationDenied(): void {
    this.geolocationApiService.geolocationDenied();
  }

  updateGeolocationPosition(lat: number, lng: number): void {
    this.geolocationApiService.setGeolocationPosition(lat, lng);
    this.geolocationPositionSubject.next();
  }

  getGeolocationAccess(): boolean {
    return this.geolocationApiService.getGeolocationAccess();
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

  private getGeolocationPosition(): GeolocationPosition {
    return this.geolocationApiService.getGeolocationPosition();
  }

}
