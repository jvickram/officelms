import React, { Component } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Registration from './components/auth/RegistrationComponent';
import Login from './components/auth/LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        {/* <Login/> */}
        <Registration />
      </div>
    );
  }
}

export default App;
