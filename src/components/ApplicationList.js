import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';

class ApplicationList extends Component {

constructor(props){
    super(props);
        this.state={
          applications:[]
        }
      }


      getApplications(match) {
        let userId = this.props.match.params.userid;
        fetch("http://localhost:5000/applications?empid=" + userId)
          .then(res => res.json())
          // .then(res => JSON.stringify(res))y
          .then(apps => this.setState({applications: apps}))
          // .then(console.log("Application are: "+ this.state.applications))
      }
      
      
componentDidMount(){
    this.getApplications();
}

  render() {
    // const beforeSort = this.state.applications.sort((a, b) => a.id < b.id)
    
    // const applist = beforeSort
    // .map((item, i) => 
    //   <ul key={item.id}>
    //     <li>{item.id}</li>
    //   </ul>
    // );

    // const applist = this.state.applications.map((item) => 
    //   <ul key={item.id}>
    //     <li>{item.type}</li>
    //   </ul>
    //   );
      
    return (
      <div>
       <h2>ALL Applications</h2>
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
        </ListGroup>
      </div>
    )
  }
}

export default ApplicationList;