import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';
import { PortableContainerComponent } from './components/portable-container/portable-container.component';
import { MaintenanceOverviewComponent } from './maintenance-overview/maintenance-overview.component';

const maintenanceRoutes: Routes = [
  {
    path: '',
    component: MaintenanceStartComponent,
    children: [],
  },
  {
    path: 'portable/:id',
    component: PortableContainerComponent,
  },
  {
    path: 'overview',
    component: MaintenanceOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(maintenanceRoutes)],
  exports: [RouterModule],
})
export class MaintenanceRouterModule {}
