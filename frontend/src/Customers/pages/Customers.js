import React from 'react';

import * as useCustomerAPI from '../hooks/useCustomerAPI';
import DataTable from '../components/DataTable';

const Customers = () => {
  const data = useCustomerAPI.GetAll();

  return (
    <div>
      <h1>Customer Overview</h1>
      <DataTable customerDataSet={data} />
    </div>
  );
};

export default Customers;
