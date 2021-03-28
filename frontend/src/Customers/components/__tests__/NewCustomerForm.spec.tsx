import * as React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import NewCustomerForm from '../NewCustomerForm';

describe('New Customer Form', () => {
  it('Calls submit with correct values', async () => {
    const submitHandler = jest.fn();

    // Mock data
    const mockFormData = {
      customerName: 'Important Customer',
      customerAddress: {
        address: 'Awesomestree 6',
        city: 'SomeCity',
        postalCode: '01234',
        country: 'SomeCountry',
      },
      customerId: 'SomeID',
      customerRef: 'SomeRef',
    };

    // Render component
    act(() => {
      render(<NewCustomerForm submitHandler={submitHandler} />);
    });

    // Set references to form fields
    const customerNameInput = screen.queryByLabelText(
      'Customer Name'
    ) as HTMLInputElement;
    const addressInput = screen.queryByLabelText('Address') as HTMLInputElement;
    const postalCodeInput = screen.queryByLabelText(
      'Postal Code'
    ) as HTMLInputElement;
    const cityInput = screen.queryByLabelText('City') as HTMLInputElement;
    const countryInput = screen.queryByLabelText('Country') as HTMLInputElement;
    const customerRefInput = screen.queryByLabelText(
      'Customer Reference'
    ) as HTMLInputElement;
    const customerIdInput = screen.queryByLabelText(
      'Customer ID'
    ) as HTMLInputElement;

    // Set form and call submit
    await waitFor(() => {
      // Set form values
      fireEvent.change(customerNameInput, {
        target: { value: mockFormData.customerName },
      });
      fireEvent.change(addressInput, {
        target: { value: mockFormData.customerAddress.address },
      });
      fireEvent.change(postalCodeInput, {
        target: { value: mockFormData.customerAddress.postalCode },
      });
      fireEvent.change(cityInput, {
        target: { value: mockFormData.customerAddress.city },
      });
      fireEvent.change(countryInput, {
        target: { value: mockFormData.customerAddress.country },
      });
      fireEvent.change(customerRefInput, {
        target: { value: mockFormData.customerRef },
      });
      fireEvent.change(customerIdInput, {
        target: { value: mockFormData.customerId },
      });

      // Submit form
      fireEvent.click(screen.getByText(/Add Customer/i));
    });

    expect(submitHandler).toHaveBeenCalledTimes(1);
    expect(submitHandler).toHaveBeenCalledWith(mockFormData);
  });
});
