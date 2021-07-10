import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { CustomerListComponent } from './customer-list/customer-list.component';

const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
  },
  { path: 'new', component: CustomerDetailsComponent },
  { path: ':id/:edit', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
