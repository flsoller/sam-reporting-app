import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Service imports
import { SnackBarService } from '../shared/services/snackbar.service';
import { CustomerService } from './customer.service';

// Models
import { Customer } from './models/customer.model';

export interface NewCustomerResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  baseURL = '/api/v1/customers';

  constructor(
    private http: HttpClient,
    private customerService: CustomerService,
    private snackBar: SnackBarService
  ) {}

  getCustomers() {
    this.http.get<Customer[]>(this.baseURL).subscribe((res) => {
      this.customerService.setCustomers(res);
    });
  }

  newCustomer(data: Customer) {
    return this.http
      .post<NewCustomerResponse>(this.baseURL, data)
      .pipe(catchError(this.handleError.bind(this)));
  }

  //
  // ERROR HANDLING
  //

  private handleError(errorResponse: HttpErrorResponse) {
    const validationError = 'Customer validation failed';
    const existsError = 'Customer already exsists';
    let errMsg = 'Something went wrong';

    if (errorResponse.error.message.split(':')[0] === validationError) {
      errMsg = 'Please fill out all required fields.';
    }

    if (errorResponse.error.message === existsError) {
      errMsg = `${existsError}.`;
    }

    this.snackBar.showSnackBar(errMsg, 'error-snackbar');
    return throwError(errMsg);
  }
}
