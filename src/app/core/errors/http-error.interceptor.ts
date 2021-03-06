import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { ErrorDialogService } from '../dialog/error-dialog/error-dialog.service';
import { LoadingDialogService } from '../dialog/loading-dialog/loading-dialog.service';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorDialogService: ErrorDialogService,
    private loadingDialogService: LoadingDialogService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingDialogService.openDialog();
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorDialogService.openDialog(error.message ?? JSON.stringify(error), error.status);
        return throwError(() => error);
      }),
      finalize(() => {
        this.loadingDialogService.hideDialog();
      })
    );
  }
}
