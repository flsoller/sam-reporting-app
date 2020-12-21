import React, { useState } from 'react';

// M-UI imports
import {
  Container,
  TextField,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },
}));

const ExampleForm = () => {
  const classes = useStyles();

  const [data, setData] = useState({
    customerName: '',
    installLocation: '',
    street: '',
    city: '',
    country: '',
    productName: '',
    serialNumber: '',
    maintenanceDate: '',
  });

  // Update state from text field inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="sm">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          action="/api/v1/maintenance-data/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Typography variant="h4">Customer Details</Typography>
          <TextField
            variant="outlined"
            id="customerName"
            label="Customer"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            id="installLocation"
            label="Location"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            id="street"
            label="Street"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            id="city"
            label="City"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            id="country"
            label="Country"
            onChange={handleChange}
          />
          <Divider variant="middle" />
          <Typography variant="h4">Maintenance Details</Typography>
          <TextField
            variant="outlined"
            id="productName"
            label="Product Name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            id="serialNumber"
            label="Serial Number"
            onChange={handleChange}
          />
          <TextField
            id="maintenanceDate"
            label="Maintenance Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ExampleForm;
