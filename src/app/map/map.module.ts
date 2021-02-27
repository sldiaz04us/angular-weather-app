import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { MapComponent } from './map.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MapComponent }
];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MapModule { }
