import React from 'react';
import axios from 'axios';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

// Style definitions for M-UI
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

// Component
const MaintenanceCard = ({
  id,
  customerName,
  productName,
  serialNumber,
  maintenanceDate,
}) => {
  const classes = useStyles();

  // Click handler to GET pdf report from backend
  const clickHandler = async () => {
    const { data } = await axios.get(`/api/v1/generate-pdf/${id}`, {
      responseType: 'blob',
    });

    // Generate file
    const file = new Blob([data], { type: 'application/pdf' });

    // Create URL for new tab with pdf.
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank', 'noopener');
  };

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
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => clickHandler()}
        >
          Get Report
        </Button>
      </CardActions>
    </Card>
  );
};

export default MaintenanceCard;
