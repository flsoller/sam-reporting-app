import { Route } from 'react-router-dom';

// Page imports
import ReportSelection from '../../maintenance/pages/ReportSelection';
import Customers from '../../customers/pages/Customers';
import CustomerDetails from '../../customers/pages/CustomerDetails';
import NewCustomer from '../../customers/pages/NewCustomer';
import ExampleForm from '../../maintenance/components/ExampleForm';
import NewMaintenance from '../../maintenance/pages/NewMaintenance';

// Component
const AppRouter = () => {
  return (
    <>
      <Route exact path="/customers" component={Customers} />
      <Route path="/customers/:id" component={CustomerDetails} />
      <Route path="/new-customer" component={NewCustomer} />
      <Route path="/new-maintenance" component={NewMaintenance} />
      <Route path="/reports" component={ReportSelection} />
      <Route path="/new-report" component={ExampleForm} />
    </>
  );
};

export default AppRouter;
