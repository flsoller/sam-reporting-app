import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Component imports
import { MaintenanceStartComponent } from './maintenance-start/maintenance-start.component';
import { PortableInstrumentComponent } from './forms/portable-instrument/portable-instrument.component';
import { SensorDataComponent } from './components/sensor-data/sensor-data.component';
import { PortableContainerComponent } from './components/portable-container/portable-container.component';

// App Module imports
import { MaintenanceRouterModule } from './maintenance-routing.module';

// Material imports
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MaintenanceOverviewComponent } from './maintenance-overview/maintenance-overview.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormsModule } from '../forms/forms.module';

@NgModule({
  declarations: [
    MaintenanceStartComponent,
    PortableInstrumentComponent,
    SensorDataComponent,
    PortableContainerComponent,
    MaintenanceOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicFormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MaintenanceRouterModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
  ],
})
export class MaintenanceModule {}
