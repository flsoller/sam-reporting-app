import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-portable-instrument',
  templateUrl: './portable-instrument.component.html',
  styleUrls: ['./portable-instrument.component.scss'],
})
export class PortableInstrumentComponent implements OnInit {
  instrumentData = this.fb.group({
    instrumentName: [''],
    instrumentSerialNumber: [''],
    testDate: [''],
    sensors: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.instrumentData.value);
  }

  get sensors() {
    return this.instrumentData.get('sensors') as FormArray;
  }

  onAddSensor() {
    this.sensors.push(
      this.fb.group({
        serialNumber: [''],
        calGasName: [''],
        calGasConc: [],
        calGasUnit: [''],
        refGas: this.fb.group({
          isUsed: [false],
          refGasName: [''],
          refGasConc: [],
          refGasUnit: [''],
        }),
        alarmLvls: this.fb.group({
          alarmOne: [],
          alarmTwo: [],
          // alarmThree: [], Optional display for fixed instruments
          // alarmFour: [], Optional display for fixed instruments
          stel: [],
          twa: [],
        }),
      })
    );
  }
}
