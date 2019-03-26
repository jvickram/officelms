import React, { Component } from 'react';
import {Nav, Navbar, NavItem,  Row, Col, Card, Button, CardHeader, CardBody, Collapse, NavbarToggler,NavbarBrand,
  CardTitle } from 'reactstrap';
import { NavLink} from "react-router-dom";

class EmpDashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      EmpId:"",  
      EmpFirstName:"",
      EmpLastName: "",
      EmpEmail:"",
      Linemanager:"",
      sick_leave_all:"",
      sick_leave_rem:"",
      casual_leave_all:"",
      casual_leave_rem:""
  
    }
    this.toggle = this.toggle.bind(this);
  }
  

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getUser(match){
    let userId = this.props.match.params.userid;
    // console.log(this.props);
    fetch("http://localhost:5000/users/" +userId)
    .then(res => res.json())
    .then(response => {
      this.setState({ 
        EmpId: response.id,
        EmpName : response.firstName + " " + response.lastName,
        sick_leave_all: response.sick_leave_allocated,
        sick_leave_rem: response.sick_leave_remaining,
        casual_leave_all: response.casual_leave_allocated,
        casual_leave_rem: response.casual_leave_remaining 
      })
    })
  }

  componentDidMount(){
    this.getUser();
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
                    <NavLink className="nav-link" to={`/empinfo/`+this.state.EmpId}> <Button> Information </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to={`/appform/`+this.state.EmpId}><Button> Apply Leave </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to={`/applist/` +this.state.EmpId}><Button> Applications </Button></NavLink>
                </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            </Col>
            <Col md={{size:8,offset:1}}>
                <h1>Dashboard </h1>
                <p>Welcome Mr. <u>{this.state.EmpName}</u></p>
                <Row>
                  <Col md={6} >
                  <Card sm={{size:10, offset:2}}>
                      <CardHeader><h5>Leave Details</h5></CardHeader>
                      <CardBody>
                        <CardTitle>Sick Leaves Assigned : {this.state.sick_leave_all}</CardTitle>
                        <CardTitle>Sick Leaves Balance : {this.state.sick_leave_rem}</CardTitle>
                        <CardTitle>Casual Leaves Balance : {this.state.casual_leave_all}</CardTitle>
                        <CardTitle>Casual Leaves Balance : {this.state.casual_leave_rem}</CardTitle>
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
