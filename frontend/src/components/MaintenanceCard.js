import React from 'react';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MaintenanceCard = ({
  customerName,
  productName,
  serialNumber,
  maintenanceDate,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {customerName}
        </Typography>
        <Typography variant="h5" component="h2">
          {productName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {maintenanceDate}
        </Typography>
        <Typography variant="body2" component="p">
          {serialNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get Report</Button>
      </CardActions>
    </Card>
  );
};

export default MaintenanceCard;
