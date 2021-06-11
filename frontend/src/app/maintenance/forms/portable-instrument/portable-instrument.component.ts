import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-portable-instrument',
  templateUrl: './portable-instrument.component.html',
  styleUrls: ['./portable-instrument.component.scss'],
})
export class PortableInstrumentComponent implements OnInit {
  @Input() instrumentForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get sensors() {
    return this.instrumentForm.get('sensors') as FormArray;
  }

  onAddSensor() {
    this.sensors.push(
      this.fb.group({
        serialNumber: [''],
        calGasName: [''],
        calGasConc: [],
        calGasUnit: [''],
        preCal: [],
        aftCal: [],
        refGas: this.fb.group({
          isUsed: [false],
          refGasName: [''],
          refGasConc: [],
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
