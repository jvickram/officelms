import React, { Component } from 'react';
import Header from "./HeaderComponent";
import EmpDashboard from "./EmpDashboardComponent";


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <EmpDashboard />
      </div>
    )
  }
}

export default Home;