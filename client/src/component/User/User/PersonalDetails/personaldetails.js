import React, { Component } from 'react'
import {Button,Input,Label,FormGroup,Form,Row,Col} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {user_data_get,user_data_post} from '../../../../actions/userAction';
export class homedetails extends Component {
    continuesubmit=e=>{
        e.preventDefault();
       console.log (this.props.allvalue);
            const data={
                name:this.props.allvalue.name,
                email:this.props.allvalue.email,
                phone:this.props.allvalue.phone,
                occupation:this.props.allvalue.occupation,
                option:this.props.allvalue.option,
                address:{
                    city:this.props.allvalue.city,
                    state:this.props.allvalue.state,
                    pincode:this.props.allvalue.pincode

                }
            }
        
  this.props.user_data_post(data);
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    static propTypes={
        isAuthenicated:PropTypes.bool,
        user_data_get:PropTypes.func.isRequired,
        user_data_post:PropTypes.func.isRequired
    }
    render() {
        const { values,handleChange }=this.props
        console.log(this.props);
        return (
            <div style={{margin:"0 30%"}}>
                 <Form>
        <FormGroup>
          <Label for="exampleCity">Occupation</Label>
          <Input type="text" name="occupation"  placeholder="Enter your occupation" onChange={handleChange('occupation')}
          defaultValue={values.occupation} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePincode">Phone</Label>
          <Input type="number" name="phone"  placeholder="enter your phone number" onChange={handleChange('phone')}
          defaultValue={values.phone}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleState">Options</Label>
          <Input type="text" name="options"  placeholder="enter your option" onChange={handleChange('option')}
          defaultValue={values.options}/>
        </FormGroup>
        <Row>
            <Col md="6"><Button color="primary" onClick={this.back}>Back</Button></Col>
            <Col md="6"><Button color="success" onClick={this.continuesubmit}>Submit</Button></Col>
            </Row>
        
        </Form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    isAuthenicated:state.auth.isAuthenicated,
    userProfile:state.user
})

export default connect(mapStateToProps,{user_data_get,user_data_post})(homedetails);
