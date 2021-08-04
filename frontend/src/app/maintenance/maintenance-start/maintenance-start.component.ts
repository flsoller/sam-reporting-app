import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

import { CustomerService } from 'src/app/customers/customer.service';
import { Customer } from 'src/app/customers/models/customer.model';
import { PortableMaintenanceService } from '../portable-maintenance.service';

@Component({
  selector: 'app-maintenance-start',
  templateUrl: './maintenance-start.component.html',
  styleUrls: ['./maintenance-start.component.scss'],
})
export class MaintenanceStartComponent implements OnInit {
  startForm = this.fb.group({
    customer: ['', [Validators.required]],
    product: ['', [Validators.required]],
    amount: [1, Validators.min(1)],
  });

  customers: Customer[] = [];
  technicianId = '';

  instrumentDefinition = {
    portable: 'Portable Instrument',
    permanent: 'Permanent Instrument',
  };

  instrumentSelector = [
    this.instrumentDefinition.portable,
    this.instrumentDefinition.permanent,
  ];

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private portMaintService: PortableMaintenanceService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
    this.technicianId = this.auth.user.value?._id || '';
  }

  onSubmit() {
    if (this.startForm.valid) {
      switch (this.startForm.value.product) {
        case this.instrumentDefinition.portable:
          let id = this.portMaintService.createNew(
            this.startForm.value.customer,
            this.technicianId
          );
          this.router.navigate(['portable', id], { relativeTo: this.route });
      }
    }
  }
}
