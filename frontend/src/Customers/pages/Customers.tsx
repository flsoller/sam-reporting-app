import { Customer } from '../customer.model';

import * as useCustomerAPI from '../hooks/useCustomerAPI';
import DataTable from '../components/DataTable';
import Spinner from '../../Shared/components/Spinner';

const Customers = () => {
  const data: Customer[] = useCustomerAPI.GetAll();

  return (
    <div>
      <h1>Customer Overview</h1>
      {data.length !== 0 ? (
        <DataTable customerDataSet={data} />
      ) : (
        <Spinner size="4rem" />
      )}
    </div>
  );
};

export default Customers;
