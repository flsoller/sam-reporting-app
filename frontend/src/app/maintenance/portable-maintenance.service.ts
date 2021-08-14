import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from '../auth/auth.service';

import { PortableMaintenance } from './models/portable-maintenance.model';
import { PortableUnit } from './models/portable.model';

@Injectable({
  providedIn: 'root',
})
export class PortableMaintenanceService {
  maintenanceData: PortableMaintenance[] = [];
  technicianId = '';

  constructor(private router: Router, private auth: AuthService) {}

  getDataById(jobId: string): PortableMaintenance {
    let data = this.maintenanceData.filter(
      (maintenance) => maintenance.jobID === jobId
    )[0];
    return data;
  }

  createNew(customer: string): string {
    this.technicianId = this.auth.user.value?._id || '';

    this.maintenanceData.push({
      jobID: uuidv4(),
      customer: customer,
      instruments: [],
      technician: this.technicianId,
    });

    // Logging
    console.log(`Maintenance created with id:`);
    console.log(this.maintenanceData[this.maintenanceData.length - 1].jobID);

    // Return id of added maintenance for router
    let id = this.maintenanceData[this.maintenanceData.length - 1].jobID;
    return id;
  }

  createNewFromCopy(customer: string, copyId: string) {
    this.technicianId = this.auth.user.value?._id || '';

    this.maintenanceData.push({
      jobID: uuidv4(),
      customer: customer,
      instruments: [],
      technician: this.technicianId,
    });
    let id = this.maintenanceData[this.maintenanceData.length - 1].jobID;

    this.router.navigate(['maintenance', 'portable', id, 'copy', copyId]);
  }

  updateData(id: string, instrumentsData: PortableUnit[]) {
    this.maintenanceData.map((maintenance) => {
      if (maintenance.jobID === id) {
        maintenance.instruments = instrumentsData;
      }
    });
  }
}
