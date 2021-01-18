import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ToIntegerPipe,
  CustomDatePipe,
  UvindexPipe,
  AirPollutionPipe
} from './pipes/index';

import {
  UvindexDirective,
  AirPollutionDirective
} from './directives/index';

const modules = [
  ToIntegerPipe,
  CustomDatePipe,
  UvindexPipe,
  AirPollutionPipe,
  UvindexDirective,
  AirPollutionDirective
];

@NgModule({
  declarations: modules,
  imports: [
    CommonModule
  ],
  exports: modules
})
export class SharedModule { }
