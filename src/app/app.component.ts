import { Component, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { LOCATION } from '@ng-web-apis/common';

import { AppUpdateDialogService } from './core/dialog/app-update-dialog.service';
import { ErrorDialogService } from './core/dialog/error-dialog.service';

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
    private errorDialogService: ErrorDialogService
  ) {
    this.handleSwUpdateAvailable();
    this.handleSwUnrecoverableState();
  }

  private handleSwUpdateAvailable(): void {
    this.swUpdate.available.subscribe(event => {
      console.log('Current version is', event.current);
      console.log('Available version is', event.available);

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
}
