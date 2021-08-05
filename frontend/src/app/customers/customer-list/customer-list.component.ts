import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { CustomerApiService } from '../customer-api.service';

// Models
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]> | null = null;

  constructor(private customerApi: CustomerApiService) {}

  ngOnInit(): void {
    this.customers = this.customerApi.getCustomers();
  }
}
