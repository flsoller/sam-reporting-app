import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PreLoadDeviceInfo } from '../../components/device-info/device-info.component';
import { PortableUnit } from '../../models/portable.model';

@Component({
  selector: 'app-portable-instrument',
  templateUrl: './portable-instrument.component.html',
  styleUrls: ['./portable-instrument.component.scss'],
})
export class PortableInstrumentComponent implements OnInit {
  @Input() index!: number;
  @Input() preLoadInstrument: PortableUnit | null = null;
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() deleteRequest = new EventEmitter<number>();

  instrumentForm: FormGroup;
  sensors: {}[] = [{}];
  deviceInfoData: PreLoadDeviceInfo | null = null;

  constructor(private fb: FormBuilder) {
    this.instrumentForm = this.fb.group({
      sensorData: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.formReady.emit(this.instrumentForm);

    if (this.preLoadInstrument) {
      this.deviceInfoData = {
        instrumentName: this.preLoadInstrument.instrumentName,
        instrumentSerialNumber: this.preLoadInstrument.serialNumber,
        testDate: this.preLoadInstrument.testDate,
      };
      this.sensorData.patchValue([...this.preLoadInstrument.sensorData]);
    }
  }

  addFormControl(controlName: string, formGroup: FormGroup) {
    this.instrumentForm.addControl(controlName, formGroup);
  }

  onAddSensor() {
    this.sensors.push({});
  }

  addSensor(index: number, formGroup: FormGroup) {
    this.sensorData.insert(index, formGroup);
  }

  removeSensor(index: number) {
    this.sensorData.removeAt(index);
    this.sensors.splice(index, 1);
  }

  get sensorData() {
    return this.instrumentForm.get('sensorData') as FormArray;
  }
}
