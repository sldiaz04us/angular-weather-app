import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { AirPollutionApiResponse } from '../../core/api/openweather-api.model';
import { DashboardService } from '../dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class AirPollutionResolver implements Resolve<AirPollutionApiResponse> {
  constructor(private dashboardService: DashboardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AirPollutionApiResponse> {
    return this.dashboardService.getAirPollution();
  }
}
