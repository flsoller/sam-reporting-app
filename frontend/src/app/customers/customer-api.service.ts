import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Service imports
import { SnackBarService } from '../shared/services/snackbar.service';

// Models
import { Customer } from './models/customer.model';

export interface CustomerApiResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  baseURL = '/api/v1/customers';

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  getCustomers() {
    return this.http
      .get<Customer[]>(this.baseURL)
      .pipe(catchError(this.handleError.bind(this)));
  }

  newCustomer(data: Customer) {
    return this.http
      .post<CustomerApiResponse>(this.baseURL, data)
      .pipe(catchError(this.handleError.bind(this)));
  }

  updateCustomer(data: Customer, id: string) {
    return this.http
      .put<CustomerApiResponse>(`${this.baseURL}/${id}`, data)
      .pipe(catchError(this.handleError.bind(this)));
  }

  getCustomerById(id: string) {
    return this.http
      .get<Customer>(`${this.baseURL}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  deleteCustomer(id: string) {
    return this.http
      .delete<CustomerApiResponse>(`${this.baseURL}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  //
  // ERROR HANDLING
  //

  private handleError(errorResponse: HttpErrorResponse) {
    const validationError = 'Customer validation failed';
    const existsError = 'Customer already exsists';
    let errMsg = 'Something went wrong';

    if (errorResponse.error.message?.split(':')[0] === validationError) {
      errMsg = 'Please fill out all required fields.';
    }

    if (errorResponse.error.message === existsError) {
      errMsg = `${existsError}.`;
    }

    this.snackBar.showSnackBar(errMsg, 'error-snackbar');
    return throwError(errMsg);
  }
}
