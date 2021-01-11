import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { DashboardComponent } from './dashboard.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { AsideSectionComponent } from './aside-section/aside-section.component';

const
  routes: Routes = [
    { path: '', component: DashboardComponent }
  ];

@NgModule({
  declarations: [DashboardComponent, TopSectionComponent, MiddleSectionComponent, BottomSectionComponent, AsideSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class DashboardModule { }