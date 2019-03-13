import React, { Component } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Registration from './components/auth/RegistrationComponent';
import Login from './components/auth/LoginComponent';
import {BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
      </div>
  </Router>
    );
  }
}

export default App;
