import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component imports
import MaintenanceCard from '../components/MaintenanceCard';

// M-UI imports
import { Grid } from '@material-ui/core';

const ReportSelection = () => {
  // Hook for setting state.
  const [maintenanceData, setMaintenanceData] = useState([]);

  // Async method to get data from server
  const getMaintenanceData = async () => {
    try {
      const { data } = await axios.get('/api/v1/maintenance-data');
      setMaintenanceData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMaintenanceData();
  }, []);

  return (
    <Grid container spacing={2} justify="center" style={{ marginTop: 5 }}>
      {maintenanceData.map((entry) => {
        return (
          <Grid item xs={12} sm={6} lg={4}>
            <MaintenanceCard
              key={entry._id}
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
