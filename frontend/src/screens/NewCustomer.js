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

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
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
                onChange={handleChange}
              />
              <Divider />
              <Typography variant="subtitle2">Address Details</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="street"
                label="Street"
                onChange={handleChange}
                size="small"
              />
              <TextField
                className={classes.width}
                variant="outlined"
                id="zipCode"
                label="Zip Code"
                onChange={handleChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="city"
                label="City"
                onChange={handleChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="country"
                label="Country"
                onChange={handleChange}
                size="small"
              />
              <Divider />
              <Typography variant="subtitle2">Optional Details</Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="customerRef"
                label="Customer Reference"
                onChange={handleChange}
                size="small"
              />
              <TextField
                variant="outlined"
                id="customerId"
                label="Customer ID"
                onChange={handleChange}
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
