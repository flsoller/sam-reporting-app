import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customers/customer.service';
import { Customer } from 'src/app/customers/models/customer.model';

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

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }
}
