import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';
import { ErrorHandlerModule } from './errors/error-handler.module';
import { DialogModule } from './dialog/dialog.module';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [NavbarComponent, ToolbarComponent, SnackbarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ErrorHandlerModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [NavbarComponent, ToolbarComponent]
})
export class CoreModule { }
