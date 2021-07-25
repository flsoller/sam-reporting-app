import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../shared/services/localStorage.service';

import { SnackBarService } from '../shared/services/snackbar.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/v1/users';

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService,
    private storageService: LocalStorageService
  ) {}

  userLogin(email: string, password: string) {
    this.http
      .post<User>(`${this.baseUrl}/login`, { email, password })
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe((user) => {
        this.storageService.setUserData(user);
        this.snackBar.showSnackBar(`Hi ${user.name}. Have fun today.`);
      });
  }

  //
  // Error Handling
  //

  private handleError(errorResponse: HttpErrorResponse) {
    const defaultError = 'Something went wrong.';
    let errMsg: null | string = null;

    if (errorResponse.error.message) {
      errMsg = errorResponse.error.message;
    }

    this.snackBar.showSnackBar(errMsg || defaultError, 'error-snackbar');

    return throwError(errMsg);
  }
}
