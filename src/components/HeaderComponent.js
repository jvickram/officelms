import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Office LMS</NavbarBrand>
        <Nav style={{color:'white'}}>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
        </Nav>
      </div>
    </Navbar>
      </div>
    )
  }
}

export default Header;