import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { SnackBarService } from '../shared/services/snackbar.service';
import { PortableMaintenance } from './models/portable-maintenance.model';

export interface NewMaintenanceRes {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MaintenanceApiService {
  baseUrl = '/api/v1/maintenance-data';

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService,
    private auth: AuthService
  ) {}

  addPortableMaintenance(data: PortableMaintenance) {
    return this.http.post<NewMaintenanceRes>(`${this.baseUrl}/portable`, data);
  }

  getMaintenanceByCustomer(customer: string, filterTechnician: boolean) {
    let params;
    if (filterTechnician && this.auth.user.value?._id) {
      params = new HttpParams().set('technician', this.auth.user.value?._id);
      console.log(params.toString());
    }

    return this.http
      .get<PortableMaintenance[]>(`${this.baseUrl}/portable/${customer}`, {
        params,
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  getMaintenanceById(id: string) {
    return this.http
      .get<PortableMaintenance[]>(`${this.baseUrl}/portable/id/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  //
  // ERROR HANDLING
  //

  private handleError(errorResponse: HttpErrorResponse) {
    const noDataError = 'No data available.';
    let errMsg = 'Something went wrong.';

    if (errorResponse.error.message === noDataError) {
      errMsg = noDataError;
    }

    this.snackBar.showSnackBar(errMsg, 'error-snackbar');

    return throwError(errMsg);
  }
}
