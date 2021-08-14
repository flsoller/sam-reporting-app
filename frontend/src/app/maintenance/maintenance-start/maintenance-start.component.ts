import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { PortableMaintenanceService } from '../portable-maintenance.service';
import { CustomerApiService } from 'src/app/customers/customer-api.service';
import { AuthService } from 'src/app/auth/auth.service';

// Models
import { Customer } from 'src/app/customers/models/customer.model';

@Component({
  selector: 'app-maintenance-start',
  templateUrl: './maintenance-start.component.html',
  styleUrls: ['./maintenance-start.component.scss'],
})
export class MaintenanceStartComponent implements OnInit {
  startForm = this.fb.group({
    customer: ['', [Validators.required]],
    product: ['', [Validators.required]],
  });

  customers: Observable<Customer[]> | null = null;
  technicianId = '';

  instrumentDefinition = {
    portable: 'Portable Instrument',
    permanent: 'Permanent Instrument',
  };

  instrumentSelector = [
    this.instrumentDefinition.portable,
    // this.instrumentDefinition.permanent,
  ];

  constructor(
    private fb: FormBuilder,
    private customerApi: CustomerApiService,
    private portMaintService: PortableMaintenanceService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customers = this.customerApi.getCustomers();
    this.technicianId = this.auth.user.value?._id || '';
  }

  onSubmit() {
    if (this.startForm.valid) {
      switch (this.startForm.value.product) {
        case this.instrumentDefinition.portable:
          let id = this.portMaintService.createNew(
            this.startForm.value.customer
          );
          this.router.navigate(['portable', id], { relativeTo: this.route });
      }
    }
  }
}
