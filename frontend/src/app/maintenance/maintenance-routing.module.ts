import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';

const maintenanceRoutes: Routes = [
  {
    path: '',
    component: MaintenanceStartComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(maintenanceRoutes)],
  exports: [RouterModule],
})
export class MaintenanceRouterModule {}
