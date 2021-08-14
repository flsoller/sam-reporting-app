import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';
import { PortableContainerComponent } from './components/portable-container/portable-container.component';
import { MaintenanceOverviewComponent } from './maintenance-overview/maintenance-overview.component';
import { AuthGuard } from '../auth/auth.guard';

const maintenanceRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MaintenanceStartComponent,
    children: [],
  },
  {
    path: 'portable/:id',
    canActivate: [AuthGuard],
    component: PortableContainerComponent,
  },
  {
    path: 'portable/:id/:mode',
    canActivate: [AuthGuard],
    component: PortableContainerComponent,
  },
  {
    path: 'portable/:id/:mode/:copyId',
    canActivate: [AuthGuard],
    component: PortableContainerComponent,
  },
  {
    path: 'overview',
    canActivate: [AuthGuard],
    component: MaintenanceOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(maintenanceRoutes)],
  exports: [RouterModule],
})
export class MaintenanceRouterModule {}
