import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../shared/services/localStorage.service';

import { SnackBarService } from '../shared/services/snackbar.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/v1/users';

  user = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  userLogin(email: string, password: string) {
    this.http
      .post<User>(`${this.baseUrl}/login`, { email, password })
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe((user) => {
        this.storageService.setUserData(user);
        this.snackBar.showSnackBar(`Hi ${user.name}. Have fun today.`);
        this.user.next(user);
        this.router.navigate(['']);
      });
  }

  appStartAuthHandler() {
    this.user.next(this.storageService.getUserData());
  }

  isAuthenticated(): boolean {
    return this.user.value?.expiration || 0 - new Date().getTime() / 1000 > 0
      ? true
      : false;
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
