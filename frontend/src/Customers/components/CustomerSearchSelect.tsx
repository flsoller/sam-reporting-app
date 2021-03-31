import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { Customer } from '../customer.model';

type Props = {
  customerData: Partial<Customer>[];
};

const CustomerSearchSelect = (props: Props) => {
  const { customerData } = props;

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
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    </>
  );
};

export default CustomerSearchSelect;
