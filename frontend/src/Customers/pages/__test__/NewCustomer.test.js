import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewCustomer from '../NewCustomer';

describe('values for input fields update correctly', () => {
  let queryByLabelText;

  beforeEach(() => {
    return ({ queryByLabelText } = render(<NewCustomer />));
  });

  it('updates customer name value on change', () => {
    const customerNameInput = queryByLabelText('Customer Name');
    fireEvent.change(customerNameInput, { target: { value: 'test customer' } });
    expect(customerNameInput.value).toBe('test customer');
  });

  it('updates address field value on change', () => {
    const addressInput = queryByLabelText('Address');
    fireEvent.change(addressInput, { target: { value: 'test address' } });
    expect(addressInput.value).toBe('test address');
  });

  it('updates postal code field value on change', () => {
    const postalCodeInput = queryByLabelText('Postal Code');
    fireEvent.change(postalCodeInput, {
      target: { value: 'test postal code' },
    });
    expect(postalCodeInput.value).toBe('test postal code');
  });

  it('updates city field value on change', () => {
    const cityInput = queryByLabelText('City');
    fireEvent.change(cityInput, { target: { value: 'test city' } });
    expect(cityInput.value).toBe('test city');
  });

  it('updates country field value on change', () => {
    const countryInput = queryByLabelText('Country');
    fireEvent.change(countryInput, { target: { value: 'test country' } });
    expect(countryInput.value).toBe('test country');
  });

  it('updates customer reference field value on change', () => {
    const customerRefInput = queryByLabelText('Customer Reference');
    fireEvent.change(customerRefInput, { target: { value: 'test ref' } });
    expect(customerRefInput.value).toBe('test ref');
  });

  it('updates customer id field value on change', () => {
    const customerIdInput = queryByLabelText('Customer ID');
    fireEvent.change(customerIdInput, { target: { value: 'test id' } });
    expect(customerIdInput.value).toBe('test id');
  });
});
