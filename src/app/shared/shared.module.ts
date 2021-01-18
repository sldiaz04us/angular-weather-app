import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ToIntegerPipe,
  CustomDatePipe,
  UvindexPipe,
  AirPollutionPipe,
  WindDirectionPipe,
  HumidityRangePipe
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
  AirPollutionDirective,
  WindDirectionPipe,
  HumidityRangePipe
];

@NgModule({
  declarations: modules,
  imports: [
    CommonModule
  ],
  exports: modules
})
export class SharedModule { }
