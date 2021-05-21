import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomerDetailsComponent, CustomerListComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
