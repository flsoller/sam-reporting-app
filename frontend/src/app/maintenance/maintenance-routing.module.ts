import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';
import { PortableInstrumentComponent } from './forms/portable-instrument/portable-instrument.component';
import { PortableContainerComponent } from './components/portable-container/portable-container.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(maintenanceRoutes)],
  exports: [RouterModule],
})
export class MaintenanceRouterModule {}
