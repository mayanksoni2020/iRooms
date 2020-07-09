import React, { Component } from 'react'
import {Button,Input,Label,FormGroup,Form,Row,Col} from 'reactstrap';
export class homedetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values,handleChange }=this.props
        return (
            <div style={{margin:"0 30%"}}>
                 <Form>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input type="text" name="city"  placeholder="Enter your City name" onChange={handleChange('city')}
          defaultValue={values.city} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePincode">Pincode</Label>
          <Input type="number" name="pincode"  placeholder="enter your pincode" onChange={handleChange('pincode')}
          defaultValue={values.pincode}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleState">State</Label>
          <Input type="text" name="state"  placeholder="enter your state" onChange={handleChange('state')}
          defaultValue={values.state}/>
        </FormGroup>
        <Row>
            <Col md="6"><Button color="primary" onClick={this.back}>Back</Button></Col>
            <Col md="6"><Button color="success" onClick={this.continue}>Continue</Button></Col>
            </Row>
        
        </Form>
            </div>
        )
    }
}

export default homedetails
