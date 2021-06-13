import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortableMaintenance } from './models/portable-maintenance.model';

export interface NewMaintenanceRes {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class MaintenanceApiService {
  baseUrl = '/api/v1/maintenance-data';

  constructor(private http: HttpClient) {}

  addPortableMaintenance(data: PortableMaintenance) {
    return this.http.post<NewMaintenanceRes>(this.baseUrl, data);
  }
}
