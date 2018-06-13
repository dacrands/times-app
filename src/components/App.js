import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';
import Best from '../containers/Best';
import Archives from '../containers/Archives';
import Popular from '../containers/Popular';

import Nav from '../components/Nav';

const App = () => (
  <Router>
    <div>
      
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Best} /> 
        <Route path="/archives" component={Archives} /> 
        <Route path="/popular" component={Popular} /> 
      </Switch>
    </div>
  </Router>
);

export default App;