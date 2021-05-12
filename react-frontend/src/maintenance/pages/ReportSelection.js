import React from 'react';

// Component imports
import * as useMaintenanceAPI from '../hooks/useMaintenanceAPI';
import MaintenanceCard from '../components/MaintenanceCard';

// M-UI imports
import { Grid } from '@material-ui/core';

const ReportSelection = () => {
  const data = useMaintenanceAPI.GetAll();

  return (
    <Grid container spacing={2} justify="center" style={{ marginTop: 5 }}>
      {data.map((entry) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={entry._id}>
            <MaintenanceCard
              id={entry._id}
              customerName={entry.customerName}
              productName={entry.productName}
              serialNumber={entry.serialNumber}
              maintenanceDate={entry.maintenanceDate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ReportSelection;
