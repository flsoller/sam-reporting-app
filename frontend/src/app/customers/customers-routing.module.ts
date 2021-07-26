import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { CustomerListComponent } from './customer-list/customer-list.component';

const customerRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CustomerListComponent,
  },
  {
    path: 'new',
    canActivate: [AuthGuard],
    component: CustomerDetailsComponent,
  },
  {
    path: ':id/:edit',
    canActivate: [AuthGuard],
    component: CustomerDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
