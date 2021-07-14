import { Inject, Injectable, OnDestroy } from '@angular/core';

import { GeolocationService } from '@ng-web-apis/geolocation';
import { PermissionsService, PERMISSIONS_SUPPORT } from '@ng-web-apis/permissions';

import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, take, takeUntil } from 'rxjs/operators';

import { GeolocationPosition, GeolocationPositionError } from 'src/app/shared/models/geolocation-position.model';
import { AgreementDialogService } from '../dialog/agreement-dialog/agreement-dialog.service';
import { ErrorDialogService } from '../dialog/error-dialog/error-dialog.service';
import { WebStorageApiService } from './web-storage-api.service';
import { OpenWeatherApiService } from '../api/openweather-api.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationApiService implements OnDestroy {
  private geolocationPosition: GeolocationPosition;
  private geolocationStatus: string;

  private geocoder: google.maps.Geocoder;

  private geolocationStatusSubject = new Subject<string>();
  geolocationStatusChanged$: Observable<string>;

  private geolocationPositionSubject = new Subject<void>();
  geolocationPositionChanged$: Observable<void>;

  private geolocationNameSubject = new BehaviorSubject<string>(undefined);
  geolocationNameChanged$: Observable<string>;

  private subsNotifier = new Subject();

  constructor(
    private readonly agreementDialogService: AgreementDialogService,
    private readonly geolocation$: GeolocationService,
    private readonly errorDialogService: ErrorDialogService,
    private readonly webStorageApiService: WebStorageApiService,
    private readonly permissions: PermissionsService,
    private readonly openWeatherApiService: OpenWeatherApiService,
    @Inject(PERMISSIONS_SUPPORT) readonly permissionsSupport: boolean
  ) {
    this.geocoder = new google.maps.Geocoder();
    this.geolocationPositionChanged$ = this.geolocationPositionSubject.asObservable();
    this.geolocationStatusChanged$ = this.geolocationStatusSubject.asObservable();
    this.geolocationNameChanged$ = this.geolocationNameSubject.asObservable();

    if (permissionsSupport) {
      this.permissions.state('geolocation').pipe(
        takeUntil(this.subsNotifier),
        catchError(err => throwError(err))
      ).subscribe(geolocationStatus => {
        this.geolocationStatus = geolocationStatus;
        this.geolocationStatusSubject.next(geolocationStatus);
        this.webStorageApiService.updateLocalStorageItem({ geolocationStatus });
      });
    }
  }

  public load(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const weatherData = this.webStorageApiService.getLocalStorageItem();
      if (weatherData) {
        if (weatherData.coords) {
          this.setGeolocationPosition(weatherData.coords.lat, weatherData.coords.lng);
          this.geolocationNameSubject.next(weatherData.geolocationName);
        }

        if (weatherData.geolocationStatus === 'granted') {
          await this.setGeolocation();
        }
        resolve(true);
      }
      else {
        this.agreementDialogService.openDialog();
        this.agreementDialogService.dialogReference.afterClosed()
          .subscribe(async (agree: boolean) => {
            if (agree) {
              await this.setGeolocation();
            }
            resolve(true);
          });
      }
    });
  }

  requestGeolocation(): void {
    this.geolocation$.pipe(take(1)).toPromise()
      .then(location => {
        this.saveGeolocationInLocalStorage(location);
        this.setGeolocationNameWithGoogleApi();
        this.geolocationPositionSubject.next();
      })
      .catch((error: GeolocationPositionError) => {
        this.showGeolocationErrorDenied(error);
      });
  }

  setGeolocation(): Promise<boolean> {
    return new Promise(resolve => {
      this.geolocation$.pipe(
        take(1),
        // finalize(() => resolve(true)) // when observable complete with or without error
      ).subscribe(async (location: GeolocationPosition) => {
        this.saveGeolocationInLocalStorage(location);
        await this.setGeolocationNameWithGoogleApi();
        resolve(true);
      }, (error: GeolocationPositionError) => {
        this.showGeolocationErrorDenied(error);
        resolve(false);
      });
    });
  }

  setGeolocationPosition(latitude: number, longitude: number): void {
    this.geolocationPosition = {
      coords: { latitude, longitude },
      timestamp: new Date().getTime()
    };
    this.geolocationPositionSubject.next();
    this.webStorageApiService.updateLocalStorageItem(
      { coords: { lat: latitude, lng: longitude } }
    );
  }
  getGeolocationPosition(): GeolocationPosition {
    return this.geolocationPosition;
  }

  getGeolocationStatus(): string {
    return this.geolocationStatus;
  }

  setGeolocationName(locationName: string): void {
    this.geolocationNameSubject.next(locationName);
    this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

  private setGeolocationNameWithGoogleApi(): Promise<void> {
    return new Promise(resolve => {
      this.geocoder.geocode({
        location: {
          lat: this.geolocationPosition.coords.latitude,
          lng: this.geolocationPosition.coords.longitude
        }
      }, async (geocoderResult, geocoderStatus) => {
        if (geocoderStatus === google.maps.GeocoderStatus.OK) {
          const locationNameFiltered = geocoderResult.filter(result =>
            result.types.includes('locality') ||
            result.types.includes('postal_code') ||
            result.types.includes('administrative_area_level_2')
          );

          if (locationNameFiltered.length > 0) {
            const locationName = locationNameFiltered[0].formatted_address;

            this.geolocationNameSubject.next(locationName);
            this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
          } else {
            await this.setGeolocationNameWithOpenWeatherApi();
          }
        }
        resolve();
      });
    });
  }

  private setGeolocationNameWithOpenWeatherApi(): Promise<boolean> {
    return new Promise(resolve => {
      this.openWeatherApiService.getLocationNameByCoords(
        this.geolocationPosition.coords.latitude,
        this.geolocationPosition.coords.longitude,
      ).subscribe(reverseGeo => {
        const firstMatch = reverseGeo[0];
        const locationName = firstMatch && firstMatch.state ? `${firstMatch?.name}, ${firstMatch?.state}` : `${firstMatch?.name}`;

        this.geolocationNameSubject.next(locationName);
        this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
        resolve(true);
      }, () => resolve(false));
    });
  }

  private saveGeolocationInLocalStorage(location: GeolocationPosition): void {
    this.geolocationPosition = location;
    this.webStorageApiService.updateLocalStorageItem(
      {
        geolocationStatus: 'granted',
        coords: { lat: location.coords.latitude, lng: location.coords.longitude }
      }
    );
  }

  private showGeolocationErrorDenied(error: GeolocationPositionError): void {
    if (error.code === 1) { // code 1 - User denied Geolocation
      this.webStorageApiService.updateLocalStorageItem({ geolocationStatus: 'denied' });
    }
    this.errorDialogService.openDialog(error.message);
  }
}
