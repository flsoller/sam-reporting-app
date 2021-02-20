import { Customer } from '../customer.model';
import { useParams } from 'react-router-dom';

import * as useCustomerAPI from '../hooks/useCustomerAPI';
import CustomerCard from '../components/CustomerCard';

import { Box } from '@material-ui/core';
import Spinner from '../../Shared/components/Spinner';

const CustomerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const customerData: Customer | any = useCustomerAPI.GetSingle(id);

  return customerData ? (
    <Box display="flex" justifyContent="center">
      <CustomerCard
        customerName={customerData.customerName}
        customerAddress={customerData.customerAddress}
        customerId={customerData.customerId}
      />
    </Box>
  ) : (
    <Spinner size="4rem" />
  );
};

export default CustomerDetails;
