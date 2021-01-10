import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';

const
  routes: Routes = [
    { path: '', component: DashboardComponent }
  ];

@NgModule({
  declarations: [DashboardComponent, TopSectionComponent, MiddleSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
