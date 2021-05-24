import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  baseURL = '/api/v1/customers';

  constructor(
    private http: HttpClient,
    private customerService: CustomerService
  ) {}

  getCustomers() {
    this.http.get<Customer[]>(this.baseURL).subscribe((res) => {
      this.customerService.setCustomers(res);
    });
  }

  newCustomer(data: Customer) {
    this.http.post(this.baseURL, data).subscribe((res) => {
      // Implement messenger service?
      console.log(res);
    });
  }
}
