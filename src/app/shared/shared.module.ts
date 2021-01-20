import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ToIntegerPipe,
  CustomDatePipe,
  UvIndexPipe,
  AirPollutionPipe,
  WindDirectionPipe,
  HumidityRangePipe
} from './pipes/index';

import {
  UvIndexDirective,
  AirPollutionDirective
} from './directives/index';

const sharedItems = [
  ToIntegerPipe,
  CustomDatePipe,
  UvIndexPipe,
  AirPollutionPipe,
  UvIndexDirective,
  AirPollutionDirective,
  WindDirectionPipe,
  HumidityRangePipe
];

@NgModule({
  declarations: [...sharedItems],
  imports: [
    CommonModule
  ],
  exports: [...sharedItems]
})
export class SharedModule { }
