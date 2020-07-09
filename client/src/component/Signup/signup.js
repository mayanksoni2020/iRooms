import React, { Component } from 'react'
import {Row,Col,Form,FormGroup,Input,Label,Button,Alert,NavLink} from 'reactstrap';
import CompleteHeader from '../CompleteHeader/completeHeader';
import './sign.css';
import {connect} from 'react-redux';
import Footer from '../Footer/footer';
import { register } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';
import Media from 'react-media';
import WOW from "wowjs";
import PropTypes from 'prop-types';
import LastFooter from '../Footer/lastFooter';

export class signup extends Component {
    state={
        name:"",
        email:"",
        password:" ",
        msg: null,
        modal:false
    }
    componentDidMount() {
      const wow = new WOW.WOW();
      wow.init();
    }
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
      };

  componentDidUpdate()
  {
    if(this.props.isAuthenticated){
      this.props.history.push('/')
    }
  }
    
    
    handleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value}) ; 
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    
        const { name, email, password } = this.state;
    
        // Create user object
        const newUser = {
          name,
          email,
          password
        };
    
        // Attempt to register
        this.props.register(newUser);
      
       
    };
    render() {
       
        return (
          <Media query="(max-width:800px)">
            {
              matches=>
              matches?(
                <div>
                <CompleteHeader></CompleteHeader>
               
                <div className="signup1">
                <p> {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}</p>
                    <Row className="signupdiv">
                        <Col sm ={{size:5}} style={{padding:"15px"}}>
                          <h4>Get Started With Your Account</h4>
                          
                          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="username@example.com" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Username</Label>
              <Input type="text" name="name" id="examleUsername" placeholder="username" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="@mypass" onChange={this.handleChange} />
            </FormGroup>
            </Form>
            <br></br>
            <Row>
                <Col xs="12" style={{padding:"15zpx"}}>
                    <Button  size="md" style={{padding:"10px 20px"}} onClick={this.handleSubmit} color='info' >Get Started </Button>
                </Col>
                </Row>
                <br></br>
                <Row>
                <Col xs="12" style={{margin:"0px"}}>
               <small> By clicking the "Get Started!" button, you are creating a iRooms account, and you agree to iRooms's <NavLink href="#" style={{display:"inline",textDecoration:"underline"}}>Terms of Use</NavLink> and <NavLink href="#"style={{textDecoration:"underline",display:"inline"}} >Privacy Policy</NavLink></small>
                </Col>
            </Row>
                        </Col>
                        
                    </Row>
                </div>
                <Footer></Footer>
                <LastFooter></LastFooter>
                </div>



              ):(
                <div>
                <CompleteHeader></CompleteHeader>
               
                <div className="signup">
                <p> {this.state.msg ? (
                  <Alert color='danger'>{this.state.msg}</Alert>
                ) : null}</p>
                    <Row className="signupdiv">
                        <Col md ={{size:5}} style={{padding:"15px"}}>
                          <h3 style={{fontSize:"48px"}} className="wow slideInLeft">Get Started With Your Account</h3>
                          <p style={{fontSize:"24px",color:"#572991"}}className="wow fadeInDown" data-wow-delay="0.6s">
                          Let us guide you home. A better quality of living. 
                          </p>
                          <Form onSubmit={this.handleSubmit} className="wow zoomIn" data-wow-delay="1s">
            <FormGroup>
              <Label for="exampleEmail">Email <span style={{color:"red"}}>*</span></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="username@example.com" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Username <span style={{color:"red"}}>*</span></Label>
              <Input type="text" name="name" id="examleUsername" placeholder="username" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password <span style={{color:"red"}}>*</span></Label>
              <Input type="password" name="password" id="examplePassword" placeholder="@mypass" onChange={this.handleChange} />
            </FormGroup>
            </Form>
            <br></br>
            <Row className="wow zoomIn" data-wow-delay="1s">
                <Col md="4" style={{padding:"15zpx"}}>
                    <Button  size="md" style={{padding:"10px 10px"}} onClick={this.handleSubmit} color="info">Get Started </Button>
                </Col>
                <Col md="8" style={{margin:"0px"}}>
                By clicking the "Get Started!" button, you are creating a iRooms account, and you agree to iRooms's <NavLink href="#" style={{display:"inline",textDecoration:"underline"}}>Terms of Use</NavLink> and <NavLink href="#"style={{textDecoration:"underline"}} >Privacy Policy</NavLink>.
                </Col>
            </Row>
                        </Col>
                        <Col md="4" className="sidediveFlag">
                        
                        <img src={require('../../image/reg1.jpg')} className="wow slideInRight" style={{marginTop:"100px",marginLeft:"50px"}} alt="independece "></img></Col>
                    </Row>
                </div>
                <Footer></Footer>
                <LastFooter></LastFooter>
                </div>


              )
            }
          </Media>
           
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });
  
  export default connect(
    mapStateToProps,
    { register, clearErrors }
  )(signup);
