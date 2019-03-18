import React, { Component } from 'react';
import {Nav, NavItem, NavLink, Row, Col, Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

class EmpDashboard extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col md={{size:2,offset:1}}>
                <Nav vertical>
                <h4> Menu </h4>
                <NavItem>
                    <NavLink href="#"> <Button> Information </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Button> Apply Leave </Button></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Button> Applications </Button></NavLink>
                </NavItem>
                </Nav>
            </Col>
            <Col md={{size:8,offset:-1}}>
                <h1> Employee Dashboard </h1>
                <Row>
                  <Col>
                  <Card>
                      <CardHeader>Leave Details</CardHeader>
                      <CardBody>
                        <CardTitle>Sick Leaves Assigned : 7</CardTitle>
                        <CardTitle>Sick Leaves Balance : 7</CardTitle>
                        <CardTitle>Casual Leaves Balance : 20</CardTitle>
                        <CardTitle>Casual Leaves Balance : 20</CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                  <Card>
                      <CardHeader>Last Three Applications</CardHeader>
                      <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

            </Col>
        </Row>
      </div>
    )
  }
}

export default EmpDashboard;
