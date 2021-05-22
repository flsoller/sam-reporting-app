import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  customerForm = this.fb.group({
    customerName: [''],
    customerAddress: this.fb.group({
      streetAddress: [''],
      city: [''],
      postalCode: [''],
      country: [''],
    }),
    customerId: [''],
    customerRef: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    // HANDLE SUBMIT
  }
}
