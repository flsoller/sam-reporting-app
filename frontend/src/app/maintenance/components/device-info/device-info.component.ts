import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from 'src/app/forms/form-control.service';
import { InputBase } from 'src/app/forms/models/input-base';
import { DeviceInfoService } from './device-info.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
})
export class DeviceInfoComponent implements OnInit {
  @Output() deviceInfoReady: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

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
  }
}
