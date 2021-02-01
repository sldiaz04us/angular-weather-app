import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { DashboardService } from '../dashboard.service';
import { OpenWeatherApiResponse } from '../../core/api/openweather-api.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolver implements Resolve<OpenWeatherApiResponse> {
  constructor(private dashboardService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OpenWeatherApiResponse> {
    return this.dashboardService.getCurrentWeather();
  }
}
