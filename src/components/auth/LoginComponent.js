import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            // email:"admin@confusion.com",
            // password:"test",
            username:"",
            pass:"",
            users:[]
        }
        this.onChange=this.onChange.bind(this);
        this.login=this.login.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    login(e){
        e.preventDefault();
        // let user = this.state.username;
        // let pass1= this.state.password;
        let cur_user = this.state.username;
        let cur_pass = this.state.pass;
        let condition = this.state.users.filter((userb) => ( 
            userb.email===cur_user && userb.pass===cur_pass));
        console.log("condition",condition)

        // if(user===cur_user && pass1===cur_pass){
        if(condition.length>0){
            alert("User Authenticated");
        }
        else alert("Wrong Credentials")
        
    }

    componentWillMount() {
        this.setState({ isFetching: true });
        fetch("http://localhost:5000/users")
          .then(res => res.json())
          .then(users => this.setState({ users: users }));
      }

  render() {

    const userdata = this.state.users.map((user, index) => (
        <ul key={user.id}>
          <li>User id: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.pass}</li>
        </ul>
    ));

    return (
      <div >
        <Form>
        <h1 className="loginHeading">Login</h1>
        <FormGroup row className = "justification">
            <Label md={2}>Email</Label>
            <Col md={4}>
                <Input type="email" 
                    name="username" 
                    placeholder="Email"
                    onChange={this.onChange}
                    value={this.state.username}
                    />
            </Col>
        </FormGroup>
        <FormGroup row className = "justification">
            <Label md={2}>Password</Label>
            <Col md={4}>
                <Input type="text"
                 name="pass" 
                 placeholder="Password"
                 onChange={this.onChange}
                 value={this.state.pass} />
            </Col>
        </FormGroup>
        
        <FormGroup row>
            <Col md={{size:2, offset:6}} sm={{size:6, offset:4}}>
                <Button type="submit" onClick={this.login}>Submit</Button>    
            </Col>
        </FormGroup>
        </Form>

        <h3>User Fetched</h3>
            {userdata}
      </div>
    )
  }
}

export default Login;