import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Component imports
import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';
import { PortableInstrumentComponent } from './forms/portable-instrument/portable-instrument.component';
import { SensorDataComponent } from './components/sensor-data/sensor-data.component';

// App Module imports
import { MaintenanceRouterModule } from './maintenance-routing.module';

// Material imports
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MaintenanceStartComponent,
    PortableInstrumentComponent,
    SensorDataComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MaintenanceRouterModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class MaintenanceModule {}
