import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GeolocationApiService } from './core/services/geolocation-api.service';

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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
