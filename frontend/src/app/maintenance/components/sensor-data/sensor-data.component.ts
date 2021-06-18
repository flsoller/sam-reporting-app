import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { GasUnit } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.scss'],
})
export class SensorDataComponent implements OnInit {
  @Input() form: any;
  @Input() index!: number;
  @Output() deleteRequest = new EventEmitter<number>();

  refGas: boolean = false;
  calPanelState: boolean = true;

  gasUnit: GasUnit[] = [GasUnit.LEL, GasUnit.PPM, GasUnit.VOL];

  constructor() {}

  ngOnInit(): void {}

  onToggleRefGas() {
    this.refGas = !this.refGas;
  }

  onDeleteSensor() {
    this.deleteRequest.emit(this.index);
  }
}
