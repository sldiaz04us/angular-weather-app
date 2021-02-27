import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    SharedModule
  ]
})
export class SettingsModule { }
