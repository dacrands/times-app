import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Hello from './Hello';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Hello} /> 
    </div>
  </Router>
);

export default App;