import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { MaintenanceApiService } from '../../maintenance-api.service';
import { PortableMaintenance } from '../../models/portable-maintenance.model';
import { PortableMaintenanceService } from '../../portable-maintenance.service';

@Component({
  selector: 'app-portable-container',
  templateUrl: './portable-container.component.html',
  styleUrls: ['./portable-container.component.scss'],
})
export class PortableContainerComponent implements OnInit, OnDestroy {
  maintenanceId: string | null = '';
  copyFromId: string | null = '';
  editMode = false;
  copyMode = false;

  paramSub: Subscription = new Subscription();

  maintenanceData: PortableMaintenance = {
    jobID: '',
    customer: '',
    instruments: [],
    technician: '',
  };

  instrumentForm = this.fb.group({
    instruments: this.fb.array([]),
  });

  constructor(
    private route: ActivatedRoute,
    private portableMaintenanceService: PortableMaintenanceService,
    private maintenanceApiService: MaintenanceApiService,
    private snackbarService: SnackBarService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      this.maintenanceId = param.get('id');
      this.copyFromId = param.get('copyId');
      this.editMode = param.get('mode') === 'edit' ? true : false;
      this.copyMode = param.get('mode') === 'copy' ? true : false;

      if (this.editMode) {
        this.initForm(this.maintenanceId || '');
      }

      if (this.copyMode) {
        this.initForm(this.copyFromId || '');
      }
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

  private initForm(maintId: string) {
    this.maintenanceApiService.getMaintenanceById(maintId).subscribe((data) => {
      this.maintenanceData = data[0];
      for (let instrument of data[0].instruments) {
        this.instruments.push(
          this.fb.group({
            ...instrument,
            sensorData: this.fb.array([]),
          })
        );
      }
    });
  }

  onAddInstrument(units: number) {
    for (let i = 0; i < units; i++)
      this.instruments.push(
        this.fb.group({
          instrumentName: [''],
          instrumentSerialNumber: [''],
          testDate: [''],
          sensorData: this.fb.array([]),
        })
      );
  }

  onRemoveInstrument(index: number) {
    this.instruments.removeAt(index);
  }

  onSubmitMaintenance() {
    this.maintenanceData.instruments = this.instruments.value;
    console.log(this.instruments.value);

    this.maintenanceApiService
      .addPortableMaintenance(this.maintenanceData)
      .subscribe((res) => {
        this.snackbarService.showSnackBar(res.message);
      });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
