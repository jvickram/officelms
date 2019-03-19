import React, { Component } from 'react';
import { Form} from 'reactstrap';
import InputField from './../InputField';
import ButtonField from '../ButtonField';

class Registration extends Component {

  constructor(props){
    super(props);
    this.state={
        firstName:"",
        lastName:"",
        email:"",
        linemanager:"",
        Password:"",
        confirmPassword:"",
    }
    this.onChange=this.onChange.bind(this);
    this.register=this.register.bind(this);
    this.reset=this.reset.bind(this);
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
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          email:this.state.email,
          pass:this.state.Password,
          linemanager:this.state.linemanager,
          sick_leave_allocated:7,
          sick_leave_remaining:7,
          casual_leave_allocated:20,
          casual_leave_remaining:20
        } 

        fetch("http://localhost:5000/users",{
          "method":"POST",
          headers: {
            "content-type":"application/json"
          },
          "body":JSON.stringify(userDetails)
        })
        .then(res => res.json())
        .then(alert("User Registered"))
        .then(this.props.history.push('/login'))

        }
    }
  }

  reset(e){
      setTimeout(      
    this.setState({
          firstName:"",
          lastName:"",
          email:"",
          Password:"",
          confirmPassword:""
        }), 500)
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}> Employee Registration</h1>
        <Form>
          <InputField Type="text" 
                      Name="firstName"
                      Placeholder="First Name"
                      OnChange={this.onChange}
                      Value={this.state.firstName}
          />
          <InputField Type="text" 
                      Name="lastName"
                      Placeholder="Last Name"
                      OnChange={this.onChange}
                      Value={this.state.lastName}
          />
          <InputField Type="text" 
                      Name="email"
                      Placeholder="Email"
                      OnChange={this.onChange}
                      Value={this.state.email}
          />
          <InputField Type="text" 
                      Name="linemanager"
                      Placeholder="Line Manager"
                      OnChange={this.onChange}
                      Value={this.state.linemanager}
          />
          <InputField Type="password" 
                      Name="Password"
                      Placeholder="Password"
                      OnChange={this.onChange}
                      Value={this.state.Password}
          />
          <InputField Type="password" 
                      Name="confirmPassword"
                      Placeholder="Confirm Password"
                      OnChange={this.onChange}
                      Value={this.state.confirmPassword}
          />
          <ButtonField 
                    Type ="submit"
                    OnClick={this.register}
            >Sign Up
          </ButtonField>
          <ButtonField 
                    Type ="reset"
                    OnClick={this.reset}
          >Reset
          </ButtonField>
        </Form>
      </div>
    )
  }
}

export default Registration;