import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, } from 'reactstrap';

class Registration extends Component {

  constructor(props){
    super(props);
    this.state={
        // email:"admin@confusion.com",
        // password:"test",
        // employeeID:"",
        firstName:"",
        lastName:"",
        email:"",
        Password:"",
        confirmPassword:"",
    }
    this.onChange=this.onChange.bind(this);
    this.register=this.register.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }

  register(e){
    e.preventDefault();

    if(this.state.firstName.length <= 0 || this.state.lastName.length <= 0 || this.state.email.length <= 0 || this.state.Password.length <= 0 || this.state.confirmPassword.length <= 0) {
      alert("All Fields are mandatory");
    }
    else {

      if(this.state.Password !== this.state.confirmPassword) {
        alert("The password and confirm password field are not same !!!")
      }
      else {
        const userDetails = {
          // empid:this.state.employeeID,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email,
          pass:this.state.Password
        } 

        fetch("http://localhost:5000/users",{
          "method":"POST",
          headers: {
            "content-type":"application/json"
          },
          "body":JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(data1 => alert(data1))

    }
      }
       

    // let cur_user = this.state.username;
    // let cur_pass = this.state.pass;
    // let condition = this.state.users.filter((userb) => ( 
    //     userb.email===cur_user && userb.pass===cur_pass));
    // console.log("condition",condition)

    // // if(user===cur_user && pass1===cur_pass){
    // if(condition.length>0){
    //     alert("User Authenticated");
    // }
    // else alert("Wrong Credentials")
    
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}> Employee Registration</h1>
        <Form>
          {/* <FormGroup row className = "justification">
            <Label md={2}>EmployeeID</Label>
            <Col md={4}>
              <Input type = "text"
                name="employeeID"
                placeholder = "EmpID" 
                onChange={this.onChange}
                value={this.state.employeeID} />
            </Col>
          </FormGroup> */}
          <FormGroup row className = "justification">
            <Label md={2}>First Name</Label>
            <Col md={4}>
              <Input type = "text" 
               name="firstName"
               placeholder = "First Name" 
               onChange={this.onChange}
               value={this.state.firstName} />
            </Col>
          </FormGroup>
          <FormGroup row className = "justification" style = {{justifyContent:'center'}}>
            <Label md={2}>Last Name</Label>
            <Col md={4}>
              <Input type = "text" 
               name="lastName"
               placeholder = "Last Name" 
               onChange={this.onChange}
               value={this.state.lastName} />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification" style = {{justifyContent:'center'}}>
          <Label md={2}>Email</Label>
            <Col md={4}>
              <Input type = "email" 
              name="email"
              placeholder = "Email"  
              onChange={this.onChange}
              value={this.state.email} />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification">
            <Label md={2}>Password</Label>
            <Col md={4}> 
              <Input type = "password" 
              name="Password"
              placeholder = "Password"  
              onChange={this.onChange}
              value={this.state.Password} />
            </ Col>
          </FormGroup>
          <FormGroup row className = "justification">
          <Label md={2}>Confirm Password</Label>
            <Col md={4}>
              <Input type = "password" 
              name="confirmPassword"
               placeholder = "Confirm Password"  
              onChange={this.onChange}
              value={this.state.confirmPassword} />
            </ Col>
          </FormGroup>
            <FormGroup row className = "justification">
            <Col md={{size:4,offset:4}}>
             <Button type="submit" onClick={this.register}>Sign Up</Button>
             <Button style = {{marginLeft: '30px'}}>Reset</Button>
             </Col>
            </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Registration;