import { Injectable } from '@angular/core';

import { InputBase } from 'src/app/forms/models/input-base';
import { InputDropdown } from 'src/app/forms/models/input-dropdown';
import { InputTextbox } from 'src/app/forms/models/input-textbox';
import { GasUnit } from '../../models/sensor.model';

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  gasUnit: GasUnit[] = [GasUnit.LEL, GasUnit.PPM, GasUnit.VOL];

  getCalInfoForm() {
    const calInfo: InputBase<string>[] = [
      new InputTextbox({
        key: 'calGasName',
        label: 'Calibration Gas',
        type: 'text',
        widthClass: 'md: w-64',
        required: true,
      }),
      new InputTextbox({
        key: 'calGasConc',
        label: 'Concentration',
        type: 'number',
        widthClass: 'md: w-32',
        required: true,
      }),
      new InputDropdown({
        key: 'calGasUnit',
        label: 'Unit',
        widthClass: 'md: w-24',
        required: true,
        options: this.gasUnit.map((u) => {
          return { key: u, value: u };
        }),
      }),
    ];

    return calInfo;
  }

  getCalDataForm() {
    const calData: InputBase<string>[] = [
      new InputTextbox({
        key: 'preZero',
        label: 'Pre Zero Data',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'aftZero',
        label: 'Aft Zero Data',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'preCal',
        label: 'Pre Cal Data',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'aftCal',
        label: 'Aft Cal Data',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
    ];

    return calData;
  }

  getRefgasInfoForm() {
    const refInfo: InputBase<string>[] = [
      new InputTextbox({
        key: 'refGasName',
        label: 'Reference Gas',
        type: 'text',
        widthClass: 'md: w-64',
        required: true,
      }),
      new InputTextbox({
        key: 'refGasConc',
        label: 'Concentration',
        type: 'number',
        widthClass: 'md: w-32',
        required: true,
      }),
    ];

    return refInfo;
  }

  getAlarmDataForm() {
    const alarmData: InputBase<string>[] = [
      new InputTextbox({
        key: 'alarmOne',
        label: 'Alarm One',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'alarmTwo',
        label: 'Alarm Two',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'stel',
        label: 'STEL Alarm',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
      new InputTextbox({
        key: 'twa',
        label: 'TWA Alarm',
        type: 'number',
        widthClass: 'md: w-36',
        required: true,
      }),
    ];

    return alarmData;
  }
}
