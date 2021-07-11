import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { CustomerApiService } from '../customer-api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  submitDisabled = false;

  // Properties for editing customers
  paramSub: Subscription = new Subscription();
  isEdit = false;
  customerId!: string | null;

  // Form builder
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
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      this.customerId = param.get('id');
      this.isEdit = param.get('edit') === 'edit' ? true : false;
    });

    if (this.isEdit) {
      this.initForm();
    }
  }

  onSubmit() {
    if (!this.isEdit) {
      this.customerApi.newCustomer(this.customerForm.value).subscribe((res) => {
        this.snackBarService.showSnackBar(res.message);
        this.customerForm.reset();
        this.customerApi.getCustomers();
      });
    }
  }

  private initForm() {
    this.customerApi.getCustomerById(this.customerId || '').subscribe((res) => {
      this.customerForm.patchValue(res);
    });
  }
}
