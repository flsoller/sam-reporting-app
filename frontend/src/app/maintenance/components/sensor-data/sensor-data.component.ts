import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { GasUnit } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss'],
})
export class SensorDataComponent implements OnInit {
  refGas: boolean = false;
  calPanelState: boolean = true;

  gasUnit: GasUnit[] = [GasUnit.LEL, GasUnit.PPM, GasUnit.VOL];

  sensorData = this.fb.group({
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
      alarmThree: [],
      alarmFour: [],
      additional: this.fb.group({
        stel: [],
        twa: [],
      }),
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.sensorData.value);
  }
}
