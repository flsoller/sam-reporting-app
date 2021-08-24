import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
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
  @ViewChild('numOfUnits') numOfUnits!: ElementRef;

  maintenanceId: string | null = '';
  paramSub: Subscription = new Subscription();
  maintenanceData: FormGroup;

  // Needed to manage *ngFor loop of instruments
  instrumentArray: {}[] = [{}];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portableMaintenanceService: PortableMaintenanceService,
    private maintenanceApiService: MaintenanceApiService,
    private snackbarService: SnackBarService,
    private fb: FormBuilder
  ) {
    this.maintenanceData = this.fb.group({
      jobID: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      instruments: this.fb.array([]),
      technician: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      const data = this.portableMaintenanceService.getDataById(id || '');

      if (!data) {
        this.router.navigate(['/maintenance']);
        return;
      }

      this.maintenanceData.patchValue({
        jobID: data.jobID,
        customer: data.customer,
        technician: data.technician,
      });
    });
  }

  get instruments() {
    return this.maintenanceData.get('instruments') as FormArray;
  }

  onAddInstrument(units: number) {
    for (let i = 0; i < units; i++) {
      this.instrumentArray.push({});
    }
    this.numOfUnits.nativeElement.value = 0;
  }

  addInstrumentControl(index: number, formGroup: FormGroup) {
    this.instruments.insert(index, formGroup);
  }

  onRemoveInstrument(index: number) {
    this.instruments.removeAt(index);
    this.instrumentArray.splice(index, 1);
  }

  onSubmitMaintenance() {
    const instrumentData = this.maintenanceData.value.instruments.map(
      (ins: any) => {
        return {
          ...ins.deviceInfo,
          sensorData: ins.sensorData.map((s: any) => {
            return {
              ...s.sensorInfo,
              ...s.calInfo,
              ...s.calData,
              refGas: {
                isUsed: s.refGas.isUsed,
                ...s.refGas.refInfo,
              },
              alarmLvls: {
                ...s.alarmData,
              },
            };
          }),
        };
      }
    );

    const maintenanceData = {
      jobID: this.maintenanceData.value.jobID,
      customer: this.maintenanceData.value.customer,
      technician: this.maintenanceData.value.technician,
      instruments: instrumentData,
    };

    this.maintenanceApiService
      .addPortableMaintenance(maintenanceData)
      .subscribe((res) => {
        this.snackbarService.showSnackBar(res.message);
      });
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
