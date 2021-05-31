import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { PortableMaintenance } from './models/portable-maintenance.model';

@Injectable({
  providedIn: 'root',
})
export class PortableMaintenanceService {
  maintenanceData: PortableMaintenance[] = [];

  createNew(customer: string) {
    this.maintenanceData.push({
      jobID: uuidv4(),
      customer: customer,
      instruments: [],
    });

    // Logging
    console.log(`Maintenance created with data:`);
    console.log(this.maintenanceData[0]);
  }
}
