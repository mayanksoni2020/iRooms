import React, { Component } from 'react'
import UserDetails from '../User/Formuserdetails/formuserdetails';
import HomeDetails from '../User/HomeDetails/homedetails';
import PersonalDetails from '../User/PersonalDetails/personaldetails';
import './comp.css';
import IndProfile from '../Indprofile/indprofile';
export class completePro extends Component {
   
    state={
        name:" ",
        email:" ",
        address:" ",
        city:" ",
        pincode:" ",
        state:" ",
        occupation:" ",
        phone:" ",
        option:" ",
        step:1
    }
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });
    }
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step}=this.state;
        const {name,email,address,occupation,city,pincode,state,phone,option}=this.state;
        const values={name,email,address,occupation,city,pincode,state,phone,option}
        switch(step)
        {
            case 1:
            return (
                <div  className="userdetails">
                <UserDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}></UserDetails>
                </div>
            );
            case 2:
                    return (
                        <HomeDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}></HomeDetails>
                    );
            case 3:
                    return(<PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        allvalue={this.state}></PersonalDetails>
                    );
            case 4:
                return <h1>success</h1>    
            case 5:
                return (<IndProfile></IndProfile>)  ;
            default:
                return <p>nothing</p>    
        }
        
       
    }
}

export default completePro
