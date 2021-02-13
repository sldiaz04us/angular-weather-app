import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { DashboardComponent } from './dashboard.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { AsideSectionComponent } from './aside-section/aside-section.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherResolver } from './resolvers/weather.resolver';
import { AirPollutionResolver } from './resolvers/air-pollution.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      weather: WeatherResolver,
      airPollution: AirPollutionResolver
    }
  }
];

@NgModule({
  declarations: [DashboardComponent, TopSectionComponent, MiddleSectionComponent, BottomSectionComponent, AsideSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule,
    SharedModule
  ]
})
export class DashboardModule { }
