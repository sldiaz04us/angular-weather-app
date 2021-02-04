import { Injectable } from '@angular/core';

import { GeolocationService } from '@ng-web-apis/geolocation';

import { take } from 'rxjs/operators';

import { GeolocationPosition, GeolocationPositionError } from 'src/app/shared/models/geolocation-position.model';
import { AgreementDialogService } from '../dialog/agreement-dialog.service';
import { ErrorDialogService } from '../dialog/error-dialog.service';
import { WebStorageApiService } from './web-storage-api.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationApiService {
  private geolocation: GeolocationPosition;
  private geolocationError: GeolocationPositionError;
  private geolocationName: string;
  private geolocationAccess: boolean;

  private geocoder: google.maps.Geocoder;

  constructor(
    private readonly agreementDialogService: AgreementDialogService,
    private readonly geolocation$: GeolocationService,
    private readonly errorDialogService: ErrorDialogService,
    private readonly webStorageApiService: WebStorageApiService
  ) {
    this.geocoder = new google.maps.Geocoder();
  }

  public load(): Promise<boolean> {
    return new Promise(async (resolve) => {
      const weatherData = this.webStorageApiService.getLocalStorageItem();
      if (weatherData && weatherData.geolocationAccess === true) {
        await this.setGeolocation();
        resolve(true);
      }
      if (weatherData && weatherData.geolocationAccess === false) {
        this.geolocationAccess = false;
        if (weatherData.coords) {
          this.setGeolocationPosition(weatherData.coords.lat, weatherData.coords.lng);
          this.geolocationName = weatherData.geolocationName;
        }
        resolve(true);
      }
      if (!weatherData) {
        this.agreementDialogService.openDialog();
        this.agreementDialogService.dialogReference.afterClosed()
          .subscribe(async (agree: boolean) => {
            if (agree) {
              await this.setGeolocation();
            } else {
              this.geolocationAccess = false;
              this.webStorageApiService.setLocalStorageItem({ geolocationAccess: false });
            }
            resolve(true);
          });
      }
    });
  }
  requestGeolocation(): void {
    this.geolocation$.pipe(take(1)).subscribe();
  }

  setGeolocation(): Promise<boolean> {
    return new Promise(resolve => {
      this.geolocation$.pipe(
        take(1),
        // finalize(() => resolve(true)) // when observable complete with or without error
      ).subscribe(async (location: GeolocationPosition) => {
        console.log('Getting location:', location);

        this.geolocation = location;
        this.geolocationAccess = true;
        this.webStorageApiService.updateLocalStorageItem(
          {
            geolocationAccess: true,
            coords: { lat: location.coords.latitude, lng: location.coords.longitude }
          }
        );

        await this.setLocationNameWithGoogleApi();
        resolve(true);
      },
        (error: GeolocationPositionError) => {
          console.log('Error getting location:', error);

          this.geolocationError = error;
          if (error.code === 1) { // code 1 - User denied Geolocation
            this.geolocationAccess = false;
            this.webStorageApiService.updateLocalStorageItem({ geolocationAccess: false });
          }
          this.errorDialogService.openDialog(error.message);
          resolve(false);
        });
    });
  }

  setGeolocationPosition(latitude: number, longitude: number): void {
    this.geolocation = {
      coords: { latitude, longitude },
      timestamp: new Date().getTime()
    };
    this.webStorageApiService.updateLocalStorageItem(
      { coords: { lat: latitude, lng: longitude } }
    );
  }
  getGeolocationPosition(): GeolocationPosition {
    return this.geolocation;
  }

  getGeolocationName(): string {
    return this.geolocationName;
  }
  setGeolocationName(locationName: string): void {
    this.geolocationName = locationName;
    this.webStorageApiService.updateLocalStorageItem({ geolocationName: locationName });
  }

  getGeolocationPositionError(): GeolocationPositionError {
    return this.geolocationError;
  }

  getGeolocationAccess(): boolean {
    return this.geolocationAccess;
  }

  geolocationDenied(): void {
    this.geolocationAccess = false;
    this.webStorageApiService.updateLocalStorageItem({ geolocationAccess: false });
  }

  private setLocationNameWithGoogleApi(): Promise<void> {
    return new Promise(resolve => {
      this.geocoder.geocode({
        location: {
          lat: this.geolocation.coords.latitude,
          lng: this.geolocation.coords.longitude
        }
      }, (geocoderResult, geocoderStatus) => {
        console.log('Geocoder status:', geocoderStatus);
        console.log('Geocoder result:', geocoderResult);
        if (geocoderStatus === google.maps.GeocoderStatus.OK) {
          const locationNameFiltered = geocoderResult.filter(result =>
            result.types.includes('locality') ||
            result.types.includes('administrative_area_level_2')
          );

          if (locationNameFiltered.length > 0) {
            this.geolocationName = locationNameFiltered[0].formatted_address;
            this.webStorageApiService.updateLocalStorageItem({ geolocationName: this.geolocationName });
          }
        }
        resolve();
      });
    });
  }
}
