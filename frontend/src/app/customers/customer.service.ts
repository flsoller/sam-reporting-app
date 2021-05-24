import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from './models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customersChanged = new EventEmitter<Customer[]>();

  constructor() {}

  customers: Customer[] = [];

  getCustomers() {
    return this.customers;
  }

  setCustomers(data: Customer[]) {
    this.customers = data;
  }
}
