import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from './models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customersChanged = new Subject<Customer[]>();

  constructor() {}

  customers: Customer[] = [];

  getCustomers() {
    return this.customers;
  }

  setCustomers(data: Customer[]) {
    this.customers = data;
    this.customersChanged.next(this.customers);
  }
}
