import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { PortableMaintenance } from './models/portable-maintenance.model';
import { PortableUnit } from './models/portable.model';

@Injectable({
  providedIn: 'root',
})
export class PortableMaintenanceService {
  maintenanceData: PortableMaintenance[] = [];

  getDataById(jobId: string): PortableMaintenance {
    let data = this.maintenanceData.filter(
      (maintenance) => maintenance.jobID === jobId
    )[0];
    return data;
  }

  createNew(customer: string): string {
    this.maintenanceData.push({
      jobID: uuidv4(),
      customer: customer,
      instruments: [],
    });

    // Logging
    console.log(`Maintenance created with id:`);
    console.log(this.maintenanceData[this.maintenanceData.length - 1].jobID);

    // Return id of added maintenance for router
    let id = this.maintenanceData[this.maintenanceData.length - 1].jobID;
    return id;
  }

  updateData(id: string, instrumentsData: PortableUnit[]) {
    this.maintenanceData.map((maintenance) => {
      if (maintenance.jobID === id) {
        maintenance.instruments = instrumentsData;
      }
    });
  }
}
