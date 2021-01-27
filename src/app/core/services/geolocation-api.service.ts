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

  constructor(
    private readonly agreementDialogService: AgreementDialogService,
    private readonly geolocation$: GeolocationService,
    private readonly errorDialogService: ErrorDialogService
  ) { }

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
      ).subscribe(location => {
        console.log('LOAD LOCATION:', location);
        this.geoLocation = location;
        resolve(true);
      }, (error: GeolocationPositionError) => {
        console.log('ERROR LOAD LOCATION:', error);
        this.geoLocationError = error;
        this.errorDialogService.openDialog(error.message);
        resolve(false);
      });
    });
  }
}
