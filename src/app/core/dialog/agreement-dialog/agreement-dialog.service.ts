import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { AgreementDialogComponent } from './agreement-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AgreementDialogService {

  private dialogRef: MatDialogRef<AgreementDialogComponent>;

  constructor(private dialog: MatDialog) { }

  get dialogReference(): MatDialogRef<AgreementDialogComponent> {
    return this.dialogRef;
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AgreementDialogComponent, {
      data: undefined,
      maxHeight: '100vh',
      width: '540px',
      maxWidth: '100vw',
      disableClose: true,
      hasBackdrop: false
    });
  }
}
