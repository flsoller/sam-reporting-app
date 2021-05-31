import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
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
