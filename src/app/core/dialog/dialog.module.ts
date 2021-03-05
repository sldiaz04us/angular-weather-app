import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { A11yModule } from '@angular/cdk/a11y';

import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AgreementDialogComponent } from './agreement-dialog/agreement-dialog.component';
import { AppUpdateDialogComponent } from './app-update-dialog/app-update-dialog.component';

@NgModule({
  declarations: [LoadingDialogComponent, ErrorDialogComponent, AgreementDialogComponent, AppUpdateDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    A11yModule
  ],
})
export class DialogModule { }
