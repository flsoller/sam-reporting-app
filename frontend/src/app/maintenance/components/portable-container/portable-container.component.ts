import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortableMaintenance } from '../../models/portable-maintenance.model';
import { PortableMaintenanceService } from '../../portable-maintenance.service';

@Component({
  selector: 'app-portable-container',
  templateUrl: './portable-container.component.html',
  styleUrls: ['./portable-container.component.scss'],
})
export class PortableContainerComponent implements OnInit, OnDestroy {
  maintenanceId: string | null = '';

  paramSub: Subscription = new Subscription();

  maintenanceData: PortableMaintenance = {
    jobID: '',
    customer: '',
    instruments: [],
  };

  instrumentForm = this.fb.group({
    instruments: this.fb.array([]),
  });

  constructor(
    private route: ActivatedRoute,
    private portableMaintenanceService: PortableMaintenanceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      this.maintenanceId = param.get('id');
    });

    // Only gets data once on init for now.
    // May need to be moved to subscription, if able to swap data for container on the fly
    if (this.maintenanceId) {
      this.maintenanceData = this.portableMaintenanceService.getDataById(
        this.maintenanceId
      );
    }
  }

  get instruments() {
    return this.instrumentForm.get('instruments') as FormArray;
  }

  onAddInstrument() {
    this.instruments.push(
      this.fb.group({
        instrumentName: [''],
        instrumentSerialNumber: [''],
        testDate: [''],
        sensors: this.fb.array([]),
      })
    );
  }

  onSubmitMaintenance() {
    this.maintenanceData.instruments = this.instrumentForm.value;
    console.log(this.maintenanceData);
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
