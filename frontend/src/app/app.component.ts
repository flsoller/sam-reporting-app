import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from './customers/customer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private customerApi: CustomerApiService) {}

  ngOnInit(): void {
    this.customerApi.getCustomers();
  }
}
