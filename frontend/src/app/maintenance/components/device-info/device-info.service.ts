import { Injectable } from '@angular/core';
import { InputBase } from 'src/app/forms/models/input-base';
import { InputDatepicker } from 'src/app/forms/models/input-datepicker';
import { InputDropdown } from 'src/app/forms/models/input-dropdown';
import { InputTextbox } from 'src/app/forms/models/input-textbox';
import { InstrumentName } from '../../models/portable.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  instrumentName: InstrumentName[] = [
    InstrumentName.ALTAIR_BASE,
    InstrumentName.ALTAIR_4X,
    InstrumentName.ALTAIR_5X,
  ];

  getDeviceInfoForm() {
    const deviceInfo: InputBase<string>[] = [
      new InputDropdown({
        key: 'instrumentName',
        label: 'Instrument Name',
        required: true,
        widthClass: 'md:w-40',
        options: this.instrumentName.map((u) => {
          return { key: u, value: u };
        }),
      }),
      new InputTextbox({
        key: 'instrumentSerialNumber',
        label: 'Serial Number',
        type: 'text',
        required: true,
        widthClass: 'md:w-40',
      }),
      new InputDatepicker({
        key: 'testDate',
        label: 'Test Date',
        required: true,
        widthClass: 'md:w-40',
      }),
    ];

    return deviceInfo;
  }
}
