import React, { Component } from 'react'
import {Button,Input,Label,FormGroup,Form} from 'reactstrap';
import './formuserdetails.css'
export class formuserdetails extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values,handleChange }=this.props
        return (
            <div style={{margin:"0% 30%"}} >
              <h2>Complete Your Profile for personalised experience</h2>
                 <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="email" name="name"  placeholder="Enter your name" onChange={handleChange('name')}
          defaultValue={values.name} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="text" name="email" placeholder="enter your email" onChange={handleChange('email')}
          defaultValue={values.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address"  placeholder="password placeholder" onChange={handleChange('address')}
          defaultValue={values.address}/>
        </FormGroup>
        <Button color="success" onClick={this.continue}>Continue</Button>
        </Form>
            </div>
        )
    }
}

export default formuserdetails
