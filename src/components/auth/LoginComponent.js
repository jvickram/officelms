import React, { Component } from 'react';
import { Form } from 'reactstrap';
import InputField from './../InputField';
import ButttonField from './../ButtonField';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            pass:"",
            isAuthenticated:false,
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
        let cur_user = this.state.username;
        let cur_pass = this.state.pass;
        let usercheck = this.state.users.filter((userb) => ( 
            userb.email===cur_user && userb.pass===cur_pass));
        console.log("usercheck",usercheck)
        if(usercheck.length>0){
            this.setState({isAuthenticated : true}); 
            setTimeout(() => {
                console.log("User Authenticated :"+ this.state.isAuthenticated);
                this.props.history.push('/EmpDashboard');
            }, 1000); 
        

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
        <ul key={index}>
          <h6>User Details</h6>
          <li>User id: <u>{user.id}</u></li>
          <li>Email: <u>{user.email}</u></li>
          <li>Password: <u>{user.pass}</u></li>
          <li>Full Name: <u>{user.firstName} {user.lastName}</u></li>
          <li>Line Manager : <u>{user.linemanager}</u></li>
          <h6>Leaves Details</h6>
          <li>Sick Leave Allocated: <u>{user.sick_leave_allocated}</u></li>
          <li>Sick Leave Remaining: <u>{user.sick_leave_remaining}</u></li>
          <li>Casual Leave Allocated: <u>{user.casual_leave_allocated}</u></li>
          <li>Casual Leave Remaining: <u>{user.casual_leave_remaining}</u></li><hr/>
        </ul>

    ));

    return (
      <div >
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

        {/* <h3>User Fetched</h3>
            {userdata} */}
      </div>
    )
  }
}

export default Login;