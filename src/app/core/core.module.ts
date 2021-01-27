import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';
import { ErrorHandlerModule } from './errors/error-handler.module';
import { DialogModule } from './dialog/dialog.module';


@NgModule({
  declarations: [NavbarComponent, ToolbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ErrorHandlerModule,
    DialogModule
  ],
  exports: [NavbarComponent, ToolbarComponent]
})
export class CoreModule { }
