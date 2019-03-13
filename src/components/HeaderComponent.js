import React, { Component } from 'react';
import {Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
      {/* <div className="container"> */}
        <NavbarBrand href="/">Office LMS</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{color:'white'}} to="/login"><Button color="primary">Login</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white'}} to="/signup"><Button color="success">SignUp</Button></NavLink>
            </NavItem>
        </Nav>
      {/* </div> */}
      </Navbar>
      </div>
    )
  }
}

export default Header;