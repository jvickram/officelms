import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="loginForm">
          <h1>Login</h1>
        <Form>
        <FormGroup>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup check>
            <Label check>
                <Input type="checkbox" />{''}
                Remember Me
            </Label>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login;