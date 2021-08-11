import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../shared/services/localStorage.service';

import { SnackBarService } from '../shared/services/snackbar.service';
import { User, UserProfile } from './user.model';

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

  // Handle login flow
  userLogin(email: string, password: string) {
    this.http
      .post<User>(`${this.baseUrl}/login`, {
        email: email.toLowerCase(),
        password,
      })
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe((user) => {
        this.storageService.setUserData(user);
        this.snackBar.showSnackBar(`Hi ${user.name}. Have fun today.`);
        this.user.next(user);
        this.router.navigate(['']);
      });
  }

  // Gets user from localStorage and sets it in service
  appStartAuthHandler() {
    this.user.next(this.storageService.getUserData());

    if (!this.istokenTimeValid()) {
      this.storageService.deleteUserData();
      this.user.next(null);
    }
  }

  // Checks if token is not expired.
  isAuthenticated(): boolean {
    return (this.user.value?.expiration || 0) - new Date().getTime() / 1000 > 0
      ? true
      : false;
  }

  logout() {
    this.user.next(null);
    this.storageService.deleteUserData();
    this.router.navigate(['/auth']);
  }

  // Checks if token is valid long enough to prevent token expiry during user workflow
  // TODO: Research refresh tokens
  private istokenTimeValid(): boolean {
    const secondsPerHour = 3600;
    const minValidityTime = secondsPerHour * 8;

    return (this.user.value?.expiration || 0) - new Date().getTime() / 1000 >
      minValidityTime
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
