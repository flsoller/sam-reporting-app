import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// M-UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, CssBaseline } from '@material-ui/core';

// Component imports
import AppHeader from './components/AppHeader';
import DrawerMenu from './components/DrawerMenu';
import ExampleForm from './components/forms/ExampleForm';
import ReportSelection from './screens/ReportSelection';
import Customers from './screens/Customers';
import NewCustomer from './screens/NewCustomer';

// Style definitions for M-UI
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        <AppHeader />
        <DrawerMenu />
        <main className={classes.content}>
          <Toolbar variant="dense" />
          {/* <Route path="/" exact /> */}
          <Route path="/customers" component={Customers} />
          <Route path="/new-customer" component={NewCustomer} />
          <Route path="/reports" component={ReportSelection} />
          <Route path="/new-report" component={ExampleForm} />
        </main>
      </div>
    </Router>
  );
};

export default App;
