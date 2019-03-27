import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

class ApplicationList extends Component {

constructor(props){
    super(props);
        this.state={
          applications:[],
          empId:""
        }
      }


      getApplications(match) {
        let userId = this.props.match.params.userid;
        fetch("http://localhost:5000/applications?empid=" + userId)
          .then(res => res.json())
          // .then(res => JSON.stringify(res))
          .then(apps => this.setState({
            applications: apps,
            empId:userId
          }))
          // .then(console.log("Application are: "+ this.state.applications))
      }
      
      
componentDidMount(){
    this.getApplications();
}

  render() {
          
    return (
      <div>
       <div className="container">
       <h2>ALL Applications from {this.state.application}</h2>
       <ListGroup>
           {this.state.applications.map((item,i) => 
            <ListGroupItem key={i}>
              <ListGroupItemHeading>
                {'Applied Date: ' + item.applicationDate} 
                <Badge pill>
                  {'  ' + item.status}
                </Badge>
              </ListGroupItemHeading>
              <ListGroupItemText>
                {item.type + ' Leave from ' + item.from + ' to ' + item.to + ' for ' + item.reason}
              </ListGroupItemText>
            </ListGroupItem>)}
            <Link to={`/EmpDashboard/`+this.state.empId}>Go Back</Link>
        </ListGroup>
      </div>
      </div>
    )
  }
}

export default ApplicationList;