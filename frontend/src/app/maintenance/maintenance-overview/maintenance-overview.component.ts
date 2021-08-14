import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Mat imports
import { MatOptionSelectionChange } from '@angular/material/core';

// Services
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { ReportApiService } from '../report-api.service';
import { MaintenanceApiService } from '../maintenance-api.service';

// Models
import { Customer } from 'src/app/customers/models/customer.model';
import { PortableMaintenance } from '../models/portable-maintenance.model';
import { CustomerApiService } from 'src/app/customers/customer-api.service';
import { PortableMaintenanceService } from '../portable-maintenance.service';

@Component({
  selector: 'app-maintenance-overview',
  templateUrl: './maintenance-overview.component.html',
  styleUrls: ['./maintenance-overview.component.scss'],
})
export class MaintenanceOverviewComponent implements OnInit {
  searchForm = this.fb.group({
    customer: [null, [Validators.required]],
    showSelf: [true, []],
  });

  customers: Observable<Customer[]> | null = null;
  maintenanceData: PortableMaintenance[] = [];

  constructor(
    private fb: FormBuilder,
    private customerApi: CustomerApiService,
    private maintenanceApi: MaintenanceApiService,
    private reportApi: ReportApiService,
    private snackBar: SnackBarService,
    private portMaintService: PortableMaintenanceService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerApi.getCustomers();
    this.onFormChange();
  }

  onFormChange() {
    this.searchForm.valueChanges.subscribe((value) => {
      if (this.searchForm.valid) {
        this.maintenanceData = [];
        this.maintenanceApi
          .getMaintenanceByCustomer(value.customer, value.showSelf)
          .subscribe((data) => {
            this.maintenanceData = data;
            this.snackBar.showSnackBar(
              `Data loaded for customer: ${data[0].customer}`
            );
          });
      }
    });
  }

  onGetReport(jobId: string) {
    this.reportApi.getPortableReport(jobId).subscribe((data: Blob) => {
      // Generate file
      const file = new Blob([data], { type: 'application/pdf' });

      // Create URL for pdf report browser tab
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank', 'noopener');
    });
  }

  onNewCopy(jobId: string) {
    this.portMaintService.createNewFromCopy(
      this.searchForm.value.customer,
      jobId
    );
  }
}
