import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

import CustomerCard from '../CustomerCard';

describe('Customer Card', () => {
  // Mock data
  const mockData = {
    customerName: 'Important Customer',
    customerAddress: {
      streetAddress: 'Awesomestreet 6',
      city: 'SomeCity',
      postalCode: '01234',
      country: 'SomeCountry',
    },
    customerId: 'SomeID',
  };

  it('renders card with data', () => {
    // Render component
    act(() => {
      render(
        <CustomerCard
          customerName={mockData.customerName}
          customerId={mockData.customerId}
          customerAddress={mockData.customerAddress}
        />
      );
    });

    expect(screen.queryByText(mockData.customerId)).toBeInTheDocument();
    expect(screen.queryByText(mockData.customerName)).toBeInTheDocument();
    expect(
      screen.queryByText(mockData.customerAddress.streetAddress)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(mockData.customerAddress.city)
    ).toBeInTheDocument();
  });
});
