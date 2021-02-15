import React from 'react';
import {Customer} from '../customer.model'

import * as useCustomerAPI from '../hooks/useCustomerAPI';
import DataTable from '../components/DataTable';

const Customers = () => {
  const data: Customer[] = useCustomerAPI.GetAll();

  return (
    <div>
      <h1>Customer Overview</h1>
      <DataTable customerDataSet={data} />
    </div>
  );
};

export default Customers;
