import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// M-UI imports
import { Container } from '@material-ui/core';

// Component imports
import Header from './components/Header';
import ExampleForm from './components/forms/ExampleForm';
import ReportSelection from './screens/ReportSelection';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={ExampleForm} exact />
        <Route path="/report" component={ReportSelection} />
      </Container>
    </Router>
  );
};

export default App;
