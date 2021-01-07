import React, { useState } from 'react';

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
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [customerId, setCustomerId] = useState('');
  const [customerRef, setCustomerRef] = useState('');

  // Change handler for address data
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
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
              <Typography variant="subtitle2">Customer Name</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="customerName"
                size="small"
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
                onChange={handleAddressChange}
              />
              <TextField
                className={classes.width}
                variant="outlined"
                id="postalCode"
                label="Postal Code"
                onChange={handleAddressChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="city"
                label="City"
                onChange={handleAddressChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="country"
                label="Country"
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
                onChange={(e) => setCustomerRef(e.target.value)}
                size="small"
              />
              <TextField
                variant="outlined"
                id="customerId"
                label="Customer ID"
                onChange={(e) => setCustomerId(e.target.value)}
                size="small"
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
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewCustomer;
