import {Customer} from '../customer.model';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

// Style definitions for M-UI
const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 350,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// Component
const CustomerCard = ({ customerName, customerId, customerAddress}: Partial<Customer>) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {customerId}
        </Typography>
        <Typography variant="h6" className={classes.pos}>
          {customerName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {/* assertion operator '!' used as parent component will only display card if data is true */}
          {customerAddress!.city}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {/* assertion operator '!' used as parent component will only display card if data is true */}
          {customerAddress!.streetAddress}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
