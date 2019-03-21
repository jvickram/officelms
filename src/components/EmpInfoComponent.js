import React, { Component } from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class EmpInfo extends Component {
    constructor(props){
        super(props);
        this.state={
          EmpId:"",  
          EmpFirstName:"",
          EmpLastName: "",
          EmpEmail:"",
          Linemanager:"",
          sick_leave_all:"",
          sick_leave_rem:"",
          casual_leave_all:"",
          casual_leave_rem:""
        }
    }

    getUser(match){
      let userId = this.props.match.params.userid;
      // console.log(this.props);
      fetch("http://localhost:5000/users/" +userId)
      .then(res => res.json())
      .then(response => {
        this.setState({ 
          EmpId: response.id,
          EmpFirstName : response.firstName,
          EmpLastName : response.lastName,
          EmpEmail:response.email,
          Linemanager:response.linemanager,
          sick_leave_all:response.sick_leave_allocated,
          sick_leave_rem:response.sick_leave_remaining,
          casual_leave_all:response.casual_leave_allocated,
          casual_leave_rem:response.casual_leave_remaining,
          info: JSON.stringify(response) })
      })
    }

    componentDidMount(){
        this.getUser();
    }
  render() {
    return (
      <div style={{paddingTop:"5%"}}>
        <Row>
          <Col md={{size:10, offset:1}}>
            <Card>
              <CardHeader><h3>{this.state.EmpLastName}'s Profile</h3></CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">Employee Id: {this.state.EmpId} </ListGroupItem>
                  <ListGroupItem className="justify-content-between">Employee Name: {this.state.EmpFirstName} {this.state.EmpLastName}  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">Employee Email: {this.state.EmpEmail} </ListGroupItem>
                  <ListGroupItem className="justify-content-between">Line Manager: {this.state.Linemanager} </ListGroupItem>
                  <ListGroupItem className="justify-content-between">Other Details:  </ListGroupItem>
                </ListGroup><br/>
                <Link to={`/EmpDashboard/`+this.state.EmpId}>Go Back</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <p>{this.state.EmpEmail}</p> */}
        
      </div>
    )
  }
}

export default EmpInfo;