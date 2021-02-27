import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { LocationsComponent } from './locations.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', component: LocationsComponent }
];


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    SharedModule
  ]
})
export class LocationsModule { }
