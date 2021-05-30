import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component imports
import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';

// Module imports
import { MaintenanceRouterModule } from './maintenance-routing.module';

// Material imports
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [MaintenanceStartComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MaintenanceRouterModule,
  ],
})
export class MaintenanceModule {}
