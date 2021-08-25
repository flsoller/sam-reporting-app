import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/forms/form-control.service';
import { InputBase } from 'src/app/forms/models/input-base';

import { SensorDataService } from './sensor-data.service';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
})
export class SensorDataComponent implements OnInit {
  @Input() index!: number;
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() deleteRequest = new EventEmitter<number>();

  refGas: boolean = false;
  calPanelState: boolean = true;

  sensorForm: FormGroup;
  refInfoGroup: FormGroup;
  alarmDataGroup: FormGroup;

  sensorInfo: InputBase<string>[] | null;
  calInfo: InputBase<string>[] | null;
  calData: InputBase<string>[] | null;
  refInfo: InputBase<string>[] | null;
  alarmData: InputBase<string>[] | null;

  constructor(
    private fcs: FormControlService,
    private snsrData: SensorDataService
  ) {
    this.sensorInfo = this.snsrData.getSensorInfoForm();
    this.calInfo = this.snsrData.getCalInfoForm();
    this.calData = this.snsrData.getCalDataForm();
    this.refInfo = this.snsrData.getRefgasInfoForm();
    this.alarmData = this.snsrData.getAlarmDataForm();

    this.refInfoGroup = this.fcs.createFormGroup(
      this.refInfo as InputBase<string>[]
    );
    this.alarmDataGroup = this.fcs.createFormGroup(
      this.alarmData as InputBase<string>[]
    );

    const combinedForm = [...this.sensorInfo, ...this.calInfo, ...this.calData];

    this.sensorForm = this.fcs.createFormGroup(
      combinedForm as InputBase<string>[]
    );

    this.sensorForm.addControl('refGas', this.refInfoGroup);
    this.sensorForm.addControl('alarmLvls', this.alarmDataGroup);

    const group = this.sensorForm.get('refGas') as FormGroup;
    group.addControl('isUsed', new FormControl(false));
  }

  ngOnInit(): void {
    this.formReady.emit(this.sensorForm);
  }

  onToggleRefGas() {
    this.refGas = !this.refGas;
  }

  onDeleteSensor() {
    this.deleteRequest.emit(this.index);
  }
}
