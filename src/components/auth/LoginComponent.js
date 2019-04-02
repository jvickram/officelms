import React, { Component } from 'react';
import { Form } from 'reactstrap';
import InputField from './../InputField';
import ButttonField from './../ButtonField';
import { Users } from '../../shared/users';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            pass:"",
            isAuthenticated:false,
            users:Users
        }
        this.onChange=this.onChange.bind(this);
        this.login=this.login.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    login(e){
        e.preventDefault();
        let cur_user = this.state.username;
        let cur_pass = this.state.pass;

        if(cur_user.length <=0 || cur_pass <=0){
            alert("Login fields can't be empty!!!")
        }else {

        let curUser = this.state.users.filter((userb) => ( 
            userb.email===cur_user && userb.pass===cur_pass));
        console.log("curUser",curUser)
        if(curUser.length>0){
            this.setState({isAuthenticated : true}); 
            setTimeout(() => {
                console.log("User Authenticated :"+ this.state.isAuthenticated);
                console.log("User :"+ curUser[0].id);
                this.props.history.push(`/EmpDashboard/`+curUser[0].id);
            }, 1000); 
        

        }
        else alert("Wrong Credentials")
    }
    }
    

    componentWillMount() {
        // this.setState({ isFetching: true });
            }

  render() {

    const userdata = this.state.users.map((user, index) => (
        <ul key={index}>
          <h6>User Details</h6>
          <li>User id: <u>{user.id}</u></li>
          <li>Email: <u>{user.email}</u></li>
          <li>Password: <u>{user.pass}</u></li>
          <li>Full Name: <u>{user.firstName} {user.lastName}</u></li>
          <hr/>
        </ul>

    ));

    return (
      <div className="container">
        <Form>
        <h1 className="loginHeading">Login</h1>
        <InputField Type="text" 
                    Name="username"
                    Placeholder="Email"
                    OnChange={this.onChange}
                    Value={this.state.username}
        />
        <InputField Type="text" 
                    Name="pass"
                    Placeholder="Password"
                    OnChange={this.onChange}
                    Value={this.state.pass}
        />
        <ButttonField 
            type="submit"
            OnClick={this.login}
        >Login</ButttonField>
     
        </Form>

        <h3>All Users</h3>
            {userdata}
      </div>
    )
  }
}

export default Login;