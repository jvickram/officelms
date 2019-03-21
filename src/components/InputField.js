import React from 'react';
import { FormGroup, Input, Col } from 'reactstrap';


function InputField(props) {
  return (
    <FormGroup row className = "justification">
            <Col md={4}>
                 <Input type={props.Type} 
                    name={props.Name} 
                    placeholder={props.Placeholder}
                    onChange={props.OnChange}
                    value={props.Value}
                    />
            </Col>
        </FormGroup>
  )
}

export default InputField;