import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GeolocationApiService } from './core/services/geolocation-api.service';
import { environment } from '../environments/environment';

export function geoLocationFactory(geoLocationService: GeolocationApiService
): () => Promise<boolean> {
  return () => geoLocationService.load();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSnackBarModule,
    environment.production ? AngularFireModule.initializeApp(environment.firebase) : [],
    environment.production ? AngularFireAnalyticsModule : []
  ],
  providers: [
    {
      provide: POSITION_OPTIONS,
      useValue: { enableHighAccuracy: false, timeout: 4000, maximumAge: 600000 /* 10 minutes */ },
    },
    {
      provide: APP_INITIALIZER,
      useFactory: geoLocationFactory,
      deps: [GeolocationApiService],
      multi: true
    },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
