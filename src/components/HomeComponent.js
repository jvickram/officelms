import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Login from "./auth/LoginComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    )
  }
}

export default Home;