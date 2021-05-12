import { Dispatch, SetStateAction } from 'react';

import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { Customer } from '../customer.model';

type Props = {
  customerData: Partial<Customer>[];
  setCustomerName: Dispatch<SetStateAction<string>>;
};

const CustomerSearchSelect = (props: Props) => {
  const { customerData, setCustomerName } = props;

  return (
    <>
      <Autocomplete
        id="search-select"
        options={customerData}
        getOptionLabel={(customerData) => customerData?.customerName || ''}
        getOptionSelected={(option, value) =>
          option.customerName === value.customerName
        }
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Customer"
            variant="outlined"
            onChange={(e) => setCustomerName(e.target.value)}
          />
        )}
      />
    </>
  );
};

export default CustomerSearchSelect;
