import React from 'react';
import { Button, FormGroup } from 'reactstrap';

function ButtonField(props) {
  return (
    <FormGroup row className = "justification">
            <Button type={props.Type} onClick={props.OnClick}>{props.children}</Button>
    </FormGroup>
  )
}

export default ButtonField;