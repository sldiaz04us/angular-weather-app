import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { AppUpdateDialogComponent } from './app-update-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(): MatDialogRef<AppUpdateDialogComponent> {
    return this.dialog.open(AppUpdateDialogComponent, {
      disableClose: true,
      hasBackdrop: true
    });
  }
}
