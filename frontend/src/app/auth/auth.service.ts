import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SnackBarService } from '../shared/services/snackbar.service';

interface UserResponse {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/v1/users';

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  userLogin(email: string, password: string) {
    return this.http
      .post<UserResponse>(`${this.baseUrl}/login`, { email, password })
      .pipe(catchError(this.handleError.bind(this)));
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
