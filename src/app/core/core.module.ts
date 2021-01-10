import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';


@NgModule({
  declarations: [NavbarComponent, ToolbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [NavbarComponent, ToolbarComponent]
})
export class CoreModule { }
