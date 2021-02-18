import { Customer } from '../customer.model';
import { useParams } from 'react-router-dom';

import * as useCustomerAPI from '../hooks/useCustomerAPI';
import CustomerCard from '../components/CustomerCard';

const CustomerDetails = () => {
  const { id } = useParams<{id: string}>();
  const customerData: Customer | any = useCustomerAPI.GetSingle(id);

  return customerData ? (
    <CustomerCard
      customerName={customerData.customerName}
      customerAddress={customerData.customerAddress}
      customerId={customerData.customerId}
    />
  ) : (
    <h2>Loading...</h2>
  );

  
};

export default CustomerDetails;
