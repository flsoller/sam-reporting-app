import * as useCustomerAPI from '../hooks/useCustomerAPI';

// M-UI imports
import { Box, Card, CardContent, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewCustomerForm from '../components/NewCustomerForm';

import { Customer } from '../customer.model';

// Style definitions for M-UI
const useStyles = makeStyles(() => ({
  card: {
    minWidth: 525,
    maxWidth: 525,
  },
}));

const NewCustomer = () => {
  const classes = useStyles();

  const submitHandler = async (data: Partial<Customer>) => {
    await useCustomerAPI.CreateNew(
      data.customerName,
      data.customerAddress,
      data.customerId,
      data.customerRef
    );
  };

  return (
    <Box display="flex" justifyContent="center">
      <Card className={classes.card}>
        <CardContent>
          <Container maxWidth="md">
            <NewCustomerForm submitHandler={submitHandler} />
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewCustomer;
