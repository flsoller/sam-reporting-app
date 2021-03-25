import react, { FormEventHandler } from 'react';
import { Formik } from 'formik';
// M-UI imports
import { TextField, Divider, Typography, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  width: {
    width: '15ch',
  },
}));

const NewCustomerForm = ({ submitHandler }: { submitHandler: Function }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        customerName: '',
        customerAddress: {
          address: '',
          city: '',
          postalCode: '',
          country: '',
        },
        customerId: '',
        customerRef: '',
      }}
      onSubmit={(formData) => {
        submitHandler(formData);
      }}
    >
      {(formik) => (
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="subtitle2">Customer Details</Typography>
          <TextField
            fullWidth
            variant="outlined"
            id="customerName"
            label="Customer Name"
            size="small"
            value={formik.values.customerName}
            onChange={formik.handleChange}
          />
          <Divider />
          <Typography variant="subtitle2">Address Details</Typography>
          <TextField
            fullWidth
            variant="outlined"
            id="address"
            name="customerAddress.address"
            label="Address"
            size="small"
            value={formik.values.customerAddress.address}
            onChange={formik.handleChange}
          />
          <TextField
            className={classes.width}
            variant="outlined"
            id="postalCode"
            name="customerAddress.postalCode"
            label="Postal Code"
            size="small"
            value={formik.values.customerAddress.postalCode}
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            id="city"
            name="customerAddress.city"
            label="City"
            size="small"
            value={formik.values.customerAddress.city}
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            id="country"
            name="customerAddress.country"
            label="Country"
            size="small"
            value={formik.values.customerAddress.country}
            onChange={formik.handleChange}
          />
          <Divider />
          <Typography variant="subtitle2">Optional Details</Typography>
          <TextField
            fullWidth
            variant="outlined"
            id="customerRef"
            label="Customer Reference"
            size="small"
            value={formik.values.customerRef}
            onChange={formik.handleChange}
          />
          <TextField
            variant="outlined"
            id="customerId"
            label="Customer ID"
            size="small"
            value={formik.values.customerId}
            onChange={formik.handleChange}
          />
          <Divider />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<AddCircleOutline />}
          >
            Add Customer
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default NewCustomerForm;
