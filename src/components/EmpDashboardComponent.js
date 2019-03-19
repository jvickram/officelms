import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavLink, Row, Col, Card, Button, CardHeader, CardBody, Collapse, NavbarToggler,NavbarBrand,
  CardTitle } from 'reactstrap';

class EmpDashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Row>
            <Col md={{size:2}}>
            <Navbar color="light" light expand="md">
              <NavbarToggler onClick={this.toggle} /><NavbarBrand href="/">Self Help</NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar vertical>
                {/* <NavbarBrand href="/">Self Help</NavbarBrand> */}
                <NavItem>
                    <NavLink href="#"> <Button> Information </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Button> Apply Leave </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Button> Applications </Button></NavLink>
                </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </Col>
            <Col md={{size:8,offset:1}}>
                <h1> Employee Dashboard </h1>
                <Row>
                  <Col md={6} >
                  <Card sm={{size:10, offset:2}}>
                      <CardHeader><h5>Leave Details</h5></CardHeader>
                      <CardBody>
                        <CardTitle>Sick Leaves Assigned : 7</CardTitle>
                        <CardTitle>Sick Leaves Balance : 7</CardTitle>
                        <CardTitle>Casual Leaves Balance : 20</CardTitle>
                        <CardTitle>Casual Leaves Balance : 20</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm={12} md={6}>
                  <Card>
                      <CardHeader><h5>Last Three Applications</h5></CardHeader>
                      <CardBody>
                        <p>This is first application</p>
                        <p>This is second application</p>
                        <p>This is third application</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

            </Col>
        </Row>
      </div>
    )
  }
}

export default EmpDashboard;
