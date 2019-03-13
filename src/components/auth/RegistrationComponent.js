import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, } from 'reactstrap';

class Registration extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}> Employee Registration</h1>
        <Form>
          <FormGroup row className = "justification">
            <Label md={2}>EmployeeID</Label>
            <Col md={4}>
              <Input type = "text" placeholder = "EmpID" />
            </Col>
          </FormGroup>
          <FormGroup row className = "justification">
            <Label md={2}>First Name</Label>
            <Col md={4}>
              <Input type = "text" placeholder = "First Name" />
            </Col>
          </FormGroup>
          <FormGroup row className = "justification" style = {{justifyContent:'center'}}>
            <Label md={2}>Last Name</Label>
            <Col md={4}>
              <Input type = "text" placeholder = "Last Name" />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification" style = {{justifyContent:'center'}}>
          <Label md={2}>Email</Label>
            <Col md={4}>
              <Input type = "email" placeholder = "Email" />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification">
            <Label md={2}>Password</Label>
            <Col md={4}> 
              <Input type = "password" placeholder = "Password" />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification">
          <Label md={2}>Confirm Password</Label>
            <Col md={4}>
              <Input type = "password" placeholder = "Confirm Password" />
            </ Col>
          </FormGroup>
            <FormGroup row className = "justification">
            <Col md={{size:4,offset:4}}>
             <Button>Sign Up</Button>
             <Button style = {{marginLeft: '30px'}}>Reset</Button>
             </Col>
            </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Registration;