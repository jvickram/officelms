import React, { Component } from 'react';
import {Nav, Navbar, NavItem,  Row, Col, Card, Button, CardHeader, CardBody, Collapse, NavbarToggler,NavbarBrand,
  CardTitle, Table } from 'reactstrap';
import { NavLink} from "react-router-dom";
import { Loading } from './Loading';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      isAdmin:false,
      isOpen: false,
      EmpId:"",  
      EmpFirstName:"",
      EmpLastName: "",
      EmpName:"",
      Email:"",
      Linemanager:"",
      sick_leave_all:"",
      sick_leave_rem:"",
      casual_leave_all:"",
      casual_leave_rem:"",
      applications: [],
      personalApplications:[]
  
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
    fetch("http://localhost:5000/users/" +userId)
    .then(res => res.json())
    .then(response => {
      this.setState({ 
        EmpId: response.id,
        EmpName : response.firstName + " " + response.lastName,
        Email: response.email,
        sick_leave_all: response.sick_leave_allocated,
        sick_leave_rem: response.sick_leave_remaining,
        casual_leave_all: response.casual_leave_allocated,
        casual_leave_rem: response.casual_leave_remaining, 
        appliations:[],
        personalApplications:[],
        isAdmin:response.isAdmin,
      });
      console.log("IsAdmin: "+response.isAdmin);
    })
  }

  getApplicationList(){
    this.setState({isLoading:true})
    fetch("http://localhost:5000/applications")
    .then(res => res.json())
    .then(response => {
      this.setState({ 
        applications:response,
        isLoading:false
      })
    })
  }

  getPersonalApplications(match){
    let userId = this.props.match.params.userid;
    this.setState({isLoading:true})
    fetch("http://localhost:5000/applications?empid=" + userId)
      .then(res => res.json())
      // .then(res => JSON.stringify(res))
      .then(apps => this.setState({
        personalApplications: apps,
        empId:userId,
        isLoading:false
      }))
  }
  

  componentWillMount(){
    this.getUser();
    this.getApplicationList();
    this.getPersonalApplications();
  }

  render() {

    const PersonalApplications = this.state.personalApplications.map((app)=>(
        <CardTitle key={app.id}>
          Applied on: <b>{app.applicationDate} </b>
          No. of Days: <b>{app.days} </b>
          Status: <b>{app.status}</b>
        </CardTitle>
      
    ))

    const appList = this.state.applications.map((apps) => (
      <tbody key={apps.id}>
        <tr >
          <td>{apps.id}</td>
          <td>{apps.empid}</td>
          <td>{apps.empname}</td>
          <td>{apps.type}</td>
          <td>{apps.from}</td>
          <td>{apps.to}</td>
          <td>{apps.days}</td>
          <td>{apps.reason}</td>
          <td>
            <Button>X</Button>
            <Button>Accept</Button>
          </td>
        </tr>
        </tbody>

    ))
    
      if(this.state.isAdmin){
        return (
          <div className="container">
            <h1>Admin Dashboard</h1>
            <p>Welcome Mr. <b><u>{this.state.EmpName}</u></b></p>
            <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>EmpID</th>
                <th>Emp Name</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Total</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* <tbody> */}
              {this.state.isLoading? <Loading /> : appList}
            {/* </tbody> */}
            </Table>
          </div>
        );
      }
      
      else {
      return (
        <div className="container">
          <Row>
              <Col md={{size:2}}>
              <Navbar color="light" light expand="md">
                <NavbarToggler onClick={this.toggle} /><NavbarBrand href="/">Self Help</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar vertical>
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
                  <p>Welcome Mr. <b><u>{this.state.EmpName}</u></b></p>
                  <Row>
                    <Col md={{size:"auto"}} >
                    <Card sm={{size:12}}>
                        <CardHeader><h5>Leave Details</h5></CardHeader>
                        <CardBody>
                          <CardTitle>Sick Leaves Assigned : {this.state.sick_leave_all}</CardTitle>
                          <CardTitle>Sick Leaves Balance : {this.state.sick_leave_rem}</CardTitle>
                          <CardTitle>Casual Leaves Balance : {this.state.casual_leave_all}</CardTitle>
                          <CardTitle>Casual Leaves Balance : {this.state.casual_leave_rem}</CardTitle>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm={12} md={{size:"auto"}} >
                    <Card>
                        <CardHeader><h5>Last Three Applications</h5></CardHeader>
                        <CardBody>
                          {this.state.isLoading? <Loading/> :PersonalApplications}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
              </Col>
          </Row>
        </div>
      )
    }
  // }
    // else{
    //   return (
    //   <div>
    //     <Loading />
    //   </div>
    //   )
    // }
  }
}

export default Dashboard;
