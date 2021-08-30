import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/forms/form-control.service';
import { InputBase } from 'src/app/forms/models/input-base';
import { DeviceInfoService } from './device-info.service';

export interface PreLoadDeviceInfo {
  instrumentName: string;
  instrumentSerialNumber: string;
  testDate: Date;
}

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
})
export class DeviceInfoComponent implements OnInit {
  @Output() deviceInfoReady: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  @Input() preLoad: PreLoadDeviceInfo | null = null;

  deviceInfoForm: FormGroup;
  deviceInfo: InputBase<string>[] | null;

  constructor(private fcs: FormControlService, private dis: DeviceInfoService) {
    this.deviceInfo = this.dis.getDeviceInfoForm();

    this.deviceInfoForm = this.fcs.createFormGroup(
      this.deviceInfo as InputBase<string>[]
    );
  }

  ngOnInit(): void {
    this.deviceInfoReady.emit(this.deviceInfoForm);

    if (this.preLoad) {
      this.deviceInfoForm.patchValue({ ...this.preLoad });
    }
  }
}
