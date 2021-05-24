import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomerApiService } from './customer-api.service';
import { CustomerService } from './customer.service';

describe('CustomerApiService', () => {
  let service: CustomerApiService;
  let customerService: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    customerService = TestBed.inject(CustomerService);
    service = TestBed.inject(CustomerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
