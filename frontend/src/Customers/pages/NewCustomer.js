import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

// M-UI imports
import {
  Box,
  Card,
  CardContent,
  Container,
  TextField,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    minWidth: 525,
    maxWidth: 525,
  },
  width: {
    width: '15ch',
  },
}));

const NewCustomer = () => {
  const classes = useStyles();

  // Component input state
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [customerId, setCustomerId] = useState('');
  const [customerRef, setCustomerRef] = useState('');

  // Change handler for address data
  const handleAddressChange = (e) => {
    setCustomerAddress({ ...customerAddress, [e.target.id]: e.target.value });
  };

  // Snackbar component
  const { enqueueSnackbar } = useSnackbar();

  // Submit handler for posting data to server
  const submitDataHandler = async (e) => {
    e.preventDefault();

    const submitData = {
      customerName,
      customerAddress,
      customerId,
      customerRef,
    };

    try {
      const { data } = await axios.post('/api/v1/customers', submitData);
      console.log(data.message);
      enqueueSnackbar(data.message, { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(
        error.response.data.message
          ? error.response.data.message
          : error.message,
        { variant: 'error' }
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.card}>
        <CardContent>
          <Container maxWidth="md">
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              // onSubmit={handleSubmit}
            >
              <Typography variant="subtitle2">Customer Details</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="customerName"
                label="Customer Name"
                size="small"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <Divider />
              <Typography variant="subtitle2">Address Details</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="address"
                label="Address"
                size="small"
                value={customerAddress.address}
                onChange={handleAddressChange}
              />
              <TextField
                className={classes.width}
                variant="outlined"
                id="postalCode"
                label="Postal Code"
                value={customerAddress.postalCode}
                onChange={handleAddressChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="city"
                label="City"
                value={customerAddress.city}
                onChange={handleAddressChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="country"
                label="Country"
                value={customerAddress.country}
                onChange={handleAddressChange}
                size="small"
              />
              <Divider />
              <Typography variant="subtitle2">Optional Details</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="customerRef"
                label="Customer Reference"
                value={customerRef}
                onChange={(e) => setCustomerRef(e.target.value)}
                size="small"
              />
              <TextField
                variant="outlined"
                id="customerId"
                label="Customer ID"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                size="small"
              />
              <Divider />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<AddCircleOutline />}
                onClick={submitDataHandler}
              >
                Add Customer
              </Button>
            </form>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewCustomer;
