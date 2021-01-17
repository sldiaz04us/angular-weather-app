import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ToIntegerPipe,
  CustomDatePipe,
} from './pipes/index';

const modules = [ToIntegerPipe, CustomDatePipe,];

@NgModule({
  declarations: modules,
  imports: [
    CommonModule
  ],
  exports: modules
})
export class SharedModule { }
