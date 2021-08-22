import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portable-instrument',
  templateUrl: './portable-instrument.component.html',
  styleUrls: ['./portable-instrument.component.scss'],
})
export class PortableInstrumentComponent implements OnInit {
  instrumentForm: FormGroup;
  sensors: {}[] = [{}];

  @Input() index!: number;
  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() deleteRequest = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
    this.instrumentForm = this.fb.group({
      sensorData: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.formReady.emit(this.instrumentForm);
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
