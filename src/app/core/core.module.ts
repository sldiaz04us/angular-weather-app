import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';


@NgModule({
  declarations: [NavbarComponent, ToolbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [NavbarComponent, ToolbarComponent]
})
export class CoreModule { }
