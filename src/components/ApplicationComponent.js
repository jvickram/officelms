import React, { Component } from 'react';
import { Form, Label, Row, Col, Input, FormGroup } from "reactstrap";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
import { Link } from 'react-router-dom';

class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            userId: "",
            type:"",
            days:"",
            reason:"",
            from:"",
            to:""
        }
        this.onValueChange=this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(){
        alert("Value submitted");
    }

    componentDidMount(){
        let userId = this.props.match.params.userid;
    console.log(this.props);
    this.setState({userId: userId})
    }

  render() {
    return (
      <Form style={{textAlign:"center"}}>
          <h3>Application</h3><br/>
          
        <FormGroup row>
        <Col md={{size:4, offset:4}}>
          <Label for="exampleSelectMulti">Type of Leave</Label>
          <Input type="select" name="type" id="exampleSelectMulti">
            <option>Sick</option>
            <option>Casual</option>
          </Input>
        </Col>
        </FormGroup>

          <InputField 
          Type="number" 
          Name="days"
          Placeholder="No of Days"
          OnChange = {this.state.onValueChange}
          Value={this.state.days}
          />
          <Label for="from">From</Label>
                <InputField 
                Type="date" 
                Name="from"
                Placeholder="From"
                OnChange = {this.state.onValueChange}
                Value={this.state.from}
                />
                <Label for="to">To</Label>
                <InputField 
                Type="date" 
                Name="to"
                Placeholder="To"
                OnChange = {this.state.onValueChange}
                Value={this.state.to}
                />
       
        <InputField 
          Type="textarea" 
          Name="reason"
          Placeholder="Reason"
          OnChange = {this.state.onValueChange}
          Value={this.state.reason}
          />
        <ButtonField 
            Type="submit" 
            OnClick={this.onSubmit}
        >Submit</ButtonField>
        <Link to={`/EmpDashboard/`+this.state.userId}>Go Back</Link>

      </Form>
    )
  }
}

export default Application;