import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Collapse, NavbarToggler,NavbarBrand } from 'reactstrap';
import { NavLink } from "react-router-dom";


class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Advanced LMS</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to='/login'><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/signup'><span className="fa fa-user-plus fa-lg"></span> SignUp</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to='/login'><span className="fa fa-sign-out fa-lg"></span>Logout</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}

export default Header;