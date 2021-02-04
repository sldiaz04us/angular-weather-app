import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { ReverseGeocoderApiResponse } from '../../core/api/openweather-api.model';
import { DashboardService } from '../dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocoderResolver implements Resolve<ReverseGeocoderApiResponse[]> {
  constructor(private dashboardService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ReverseGeocoderApiResponse[]> {
    return this.dashboardService.getGeolocationNameWithOpenWeatherApi();
  }
}
