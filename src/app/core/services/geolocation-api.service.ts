import { Injectable } from '@angular/core';

import { GeolocationService } from '@ng-web-apis/geolocation';

import { take } from 'rxjs/operators';

import { GeolocationPosition, GeolocationPositionError } from 'src/app/shared/models/geolocation-position.model';
import { AgreementDialogService } from '../dialog/agreement-dialog.service';
import { ErrorDialogService } from '../dialog/error-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationApiService {
  private geoLocation: GeolocationPosition;
  private geoLocationError: GeolocationPositionError;
  private geoLocationName: string;

  private geocoder: google.maps.Geocoder;

  constructor(
    private readonly agreementDialogService: AgreementDialogService,
    private readonly geolocation$: GeolocationService,
    private readonly errorDialogService: ErrorDialogService
  ) {
    this.geocoder = new google.maps.Geocoder();
  }

  setGeolocationPosition(latitude: number, longitude: number): void {
    this.geoLocation = {
      coords: { latitude, longitude },
      timestamp: new Date().getTime()
    };
  }
  getGeolocationPosition(): GeolocationPosition {
    return this.geoLocation;
  }

  getGeolocationPositionError(): GeolocationPositionError {
    return this.geoLocationError;
  }

  public load(): Promise<boolean> {
    return new Promise((resolve) => {
      this.agreementDialogService.openDialog();
      this.agreementDialogService.dialogReference.afterClosed()
        .subscribe(async (agree: boolean) => {
          if (agree) {
            await this.setLocation();
          }
          resolve(true);
        });
    });
  }

  setLocation(): Promise<boolean> {
    return new Promise(resolve => {
      this.geolocation$.pipe(
        take(1),
        // finalize(() => resolve(true)) // when observable complete with or without error
      ).subscribe(async (location: GeolocationPosition) => {
        console.log('LOAD LOCATION:', location);
        this.geoLocation = location;
        await this.setLocationNameWithGoogleApi();
        resolve(true);
      }, (error: GeolocationPositionError) => {
        console.log('ERROR LOAD LOCATION:', error);
        this.geoLocationError = error;
        this.errorDialogService.openDialog(error.message);
        resolve(false);
      });
    });
  }

  getGeoLocationName(): string {
    return this.geoLocationName;
  }
  setGeoLocationName(locationName: string): void {
    this.geoLocationName = locationName;
  }

  private setLocationNameWithGoogleApi(): Promise<void> {
    return new Promise(resolve => {
      this.geocoder.geocode({
        location: {
          lat: this.geoLocation.coords.latitude,
          lng: this.geoLocation.coords.longitude
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
            this.geoLocationName = locationNameFiltered[0].formatted_address;
          }
        }
        resolve();
      });
    });
  }
}
