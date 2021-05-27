import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { CustomerApiService } from '../customer-api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  submitDisabled = false;

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

  constructor(
    private fb: FormBuilder,
    private customerApi: CustomerApiService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.customerApi.newCustomer(this.customerForm.value).subscribe((res) => {
      this.snackBarService.showSnackBar(res.message);
      this.customerForm.reset();
    });
  }
}
