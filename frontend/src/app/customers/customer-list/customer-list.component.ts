import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerApiService } from '../customer-api.service';

import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private customerService: CustomerService,
    private customerApi: CustomerApiService
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomers();

    this.subscription = this.customerService.customersChanged.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );

    this.customers = this.customerService.getCustomers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
