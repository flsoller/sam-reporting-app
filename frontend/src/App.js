import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component imports
import Header from './components/Header';
import ExampleForm from './components/forms/ExampleForm';
import ReportSelection from './components/forms/ReportSelection';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={ExampleForm} exact />
      <Route path="/report" component={ReportSelection} />
    </Router>
  );
};

export default App;
