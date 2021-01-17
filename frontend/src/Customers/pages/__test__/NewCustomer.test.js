import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewCustomer from '../NewCustomer';

describe('customer address values', () => {
  it('updates address field value on change', () => {
    const { queryByLabelText } = render(<NewCustomer />);
    const addressInput = queryByLabelText('Address');
    fireEvent.change(addressInput, { target: { value: 'test address' } });
    expect(addressInput.value).toBe('test address');
  });

  it('updates postal code field value on change', () => {
    const { queryByLabelText } = render(<NewCustomer />);
    const postalCodeInput = queryByLabelText('Postal Code');
    fireEvent.change(postalCodeInput, {
      target: { value: 'test postal code' },
    });
    expect(postalCodeInput.value).toBe('test postal code');
  });

  it('updates city field value on change', () => {
    const { queryByLabelText } = render(<NewCustomer />);
    const cityInput = queryByLabelText('City');
    fireEvent.change(cityInput, { target: { value: 'test city' } });
    expect(cityInput.value).toBe('test city');
  });

  it('updates country field value on change', () => {
    const { queryByLabelText } = render(<NewCustomer />);
    const countryInput = queryByLabelText('Country');
    fireEvent.change(countryInput, { target: { value: 'test country' } });
    expect(countryInput.value).toBe('test country');
  });
});
