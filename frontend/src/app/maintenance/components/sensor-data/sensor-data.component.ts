import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { GasUnit } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss'],
})
export class SensorDataComponent implements OnInit {
  @Input() form: any;

  refGas: boolean = false;
  calPanelState: boolean = true;

  gasUnit: GasUnit[] = [GasUnit.LEL, GasUnit.PPM, GasUnit.VOL];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onToggleRefGas() {
    this.refGas = !this.refGas;
  }
}
