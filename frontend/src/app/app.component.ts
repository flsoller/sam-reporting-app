import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CustomerApiService } from './customers/customer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private customerApi: CustomerApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.appStartAuthHandler();
    this.customerApi.getCustomers();
  }
}
