// Module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// Component imports
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomerDetailsComponent, CustomerListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class CustomersModule {}
