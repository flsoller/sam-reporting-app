import React from 'react';
import { Route } from 'react-router-dom';

// Page imports
import ReportSelection from '../../Maintenance/pages/ReportSelection';
import Customers from '../../Customers/pages/Customers';
import NewCustomer from '../../Customers/pages/NewCustomer';
import ExampleForm from '../../Maintenance/components/ExampleForm';

// Component
const AppRouter = () => {
  return (
    <>
      <Route path="/customers" component={Customers} />
      <Route path="/new-customer" component={NewCustomer} />
      <Route path="/reports" component={ReportSelection} />
      <Route path="/new-report" component={ExampleForm} />
    </>
  );
};

export default AppRouter;
