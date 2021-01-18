import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { UnitsMeasurement } from '../shared/enums/units-measurement.enum';
import { OpenWeatherApiResponse } from './openweather-api.model';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<OpenWeatherApiResponse> {
  constructor(private dashboardService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OpenWeatherApiResponse> {
    return this.dashboardService.getCurrentWeather(29.7858, -95.8244, UnitsMeasurement.imperial);
  }
}
