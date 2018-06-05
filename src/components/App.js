import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Menu from './Menu';
import Footer from './Footer';
import Scholars from './Scholars';
import Contact from './Contact';
import Benefits from './Benefits';
import Landing from './landing/Landing';



const App = () => (
  <Router>
    <div>
      <Menu />
      <Route exact path="/" component={Landing} />
      <Route path="/3sp" component={Scholars} />
      <Route path="/contact" component={Contact} />
      <Route path="/benefits" component={Benefits} />
      <Footer />
    </div>
  </Router>
);

export default App;