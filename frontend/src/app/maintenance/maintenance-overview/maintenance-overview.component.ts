import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { CustomerService } from 'src/app/customers/customer.service';
import { Customer } from 'src/app/customers/models/customer.model';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { MaintenanceApiService } from '../maintenance-api.service';
import { PortableMaintenance } from '../models/portable-maintenance.model';

@Component({
  selector: 'app-maintenance-overview',
  templateUrl: './maintenance-overview.component.html',
  styleUrls: ['./maintenance-overview.component.scss'],
})
export class MaintenanceOverviewComponent implements OnInit {
  searchForm = this.fb.group({
    customer: ['', [Validators.required]],
  });

  customers: Customer[] = [];
  maintenanceData: PortableMaintenance[] = [];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private maintenanceApi: MaintenanceApiService,
    private snackBar: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  setMaintenanceData(event: MatOptionSelectionChange) {
    if (event.source.selected) {
      this.maintenanceApi
        .getMaintenanceByCustomer(event.source.value)
        .subscribe((data) => {
          this.maintenanceData = data;
          this.snackBar.showSnackBar(`Data loaded for customer: ${data[0].customer}`)
        });
    }
  }
}
