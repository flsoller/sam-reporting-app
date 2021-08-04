import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

// Components
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then(
        (module) => module.CustomersModule
      ),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./maintenance/maintenance.module').then(
        (module) => module.MaintenanceModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
