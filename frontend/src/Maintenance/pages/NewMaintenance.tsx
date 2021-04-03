import { useState } from 'react';

import { Box, makeStyles, TextField, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

import CustomerSearchSelect from '../../customers/components/CustomerSearchSelect';
import ProductSearchSelect from '../components/ProductSearchSelect';

// Style definitions for M-UI
const useStyles = makeStyles(() => ({
  spacing: {
    marginTop: '2rem',
  },
}));

const NewMaintenance = () => {
  const classes = useStyles();

  const [customerName, setCustomerName] = useState('');
  const [productType, setProductType] = useState('');
  const [amount, setAmount] = useState(1);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.spacing}
    >
      <CustomerSearchSelect
        customerData={[]}
        setCustomerName={setCustomerName}
      />
      <div className={classes.spacing}>
        <ProductSearchSelect setProductType={setProductType} />
      </div>
      {productType !== 'FGFD' ? (
        <div className={classes.spacing}>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            style={{ width: 300 }}
          />
        </div>
      ) : null}
      <div className={classes.spacing}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<AddCircleOutline />}
        >
          Create Maintenance
        </Button>
      </div>
    </Box>
  );
};

export default NewMaintenance;
