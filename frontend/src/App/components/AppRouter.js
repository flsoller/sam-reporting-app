import React from 'react';
import { Route } from 'react-router-dom';

// Page imports
import ReportSelection from '../../screens/ReportSelection';
import Customers from '../../screens/Customers';
import NewCustomer from '../../screens/NewCustomer';
import ExampleForm from '../../components/forms/ExampleForm';

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
