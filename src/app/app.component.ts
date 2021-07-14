import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

import { LOCATION } from '@ng-web-apis/common';

import { ConnectionService } from 'ng-connection-service';

import { AppUpdateDialogService } from './core/dialog/app-update-dialog/app-update-dialog.service';
import { ErrorDialogService } from './core/dialog/error-dialog/error-dialog.service';
import { SnackbarComponent } from './core/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private swUpdate: SwUpdate,
    private appUpdateDialog: AppUpdateDialogService,
    @Inject(LOCATION) private location: Location,
    private errorDialogService: ErrorDialogService,
    private connectionService: ConnectionService,
    private snackBar: MatSnackBar
  ) {
    this.handleSwUpdateAvailable();
    this.handleSwUnrecoverableState();
    this.notifyConnectionStatus();
  }

  private handleSwUpdateAvailable(): void {
    this.swUpdate.available.subscribe(event => {
      this.appUpdateDialog.openDialog().afterClosed().subscribe(agree => {
        if (agree) {
          this.swUpdate.activateUpdate().then(() => this.location.reload());
        }
      });
    });
  }

  private handleSwUnrecoverableState(): void {
    this.swUpdate.unrecoverable.subscribe(event => {
      this.errorDialogService.openDialog(`An error occurred that we cannot recover from: ${event.reason}. The App will be reloaded.`)
        .afterClosed()
        .subscribe(() => {
          this.location.reload();
        });
    });
  }

  private notifyConnectionStatus(): void {
    this.connectionService.monitor().subscribe(isConnected => {
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: isConnected
      });
    });
  }
}
