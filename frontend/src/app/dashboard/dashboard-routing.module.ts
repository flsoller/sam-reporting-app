import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './home/home.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
