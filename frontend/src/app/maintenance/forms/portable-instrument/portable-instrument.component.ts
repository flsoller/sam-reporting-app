import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {}
}
