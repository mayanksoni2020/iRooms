import React,{Component} from 'react';
import CompleteHeader from '../../component/CompleteHeader/completeHeader';
import Footer from '../../component/Footer/footer';
import LastFooter from '../../component/Footer/lastFooter';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  NavLink,
  Alert
 
} from 'reactstrap';
import Media from 'react-media';
import './login.css';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

class Login extends Component{

  state = {
    email: '',
    password: '',
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error,isAuthenticated} = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if(isAuthenticated){
      this.props.history.push('/')
    }
  }
 
  // toggle = () => {
  //   // Clear errors
  //   this.props.clearErrors();
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const user = {
      email,
      password
    };

    // Attempt to login
    this.props.login(user);
  

  };

  render()
  {
    console.log("hello");
    return(
        <Media query="(max-width:800px)">
            {matches=>
            matches?(
                <div>
                    <CompleteHeader></CompleteHeader>
                <div className="mobLogin">
                
                <Row style={{margin:"0px"}} >
                  
                  
                  <Col xs="12" className="loginpagemob">
                    <br></br>
                    <h2 style={{textAlign:"center",color:"black",marginBottom:"20px"}}>Login</h2>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                      
                        <div className="divblack1">
                          <Row >
                          <Col  xs={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-envelope" ></i></Col>
                          <Col xs="8">
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          className="mb-3"
                          onChange={this.onChange}
                        />
                        </Col>
                        </Row>
                        </div>
                        
                     
                      
                        <div className="divblack1">
                          <Row >
                            <Col xs={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-key"></i></Col>
                          <Col xs="8">
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Password'
                          className='mb-3'
                          onChange={this.onChange}
                        />
                        </Col>
                        </Row>
                        </div>
              <br></br>
              <Col xs={{size:10,offset:1}} style={{textAlign:"center"}}>
              <Button color='dark' >
                          Login
                        </Button>
              </Col>
              <br></br>
              <Row>
              <Col xs={{size:5,offset:1}} style={{textAlign:"left",textDecoration:"underline"}}><NavLink href="/forgot"><small>Forgot Password?</small></NavLink></Col>
                <Col xs={{size:6}} style={{textDecoration:"underline"}}><NavLink href="/signup"><small>Didn't have account yet!</small></NavLink></Col>  
                </Row>       
                      </FormGroup>
                    </Form>
            
                  </Col>
                  
                </Row>

                </div>
                    <Footer></Footer>
                    <LastFooter></LastFooter>
                    </div>

            ):(
                <div className="mainpart">
                    <CompleteHeader></CompleteHeader>
                <Row>
                  
                  <Col md={{size:4,offset:2}} className="loginpage1" style={{backgroundColor:"black"}}>
              <img src="https://media.giphy.com/media/JsnKOeIHcV21mRD9UQ/giphy.gif" alt="gifys"></img>
                  </Col>
                  <Col sm="12" md={{ size: 4}} className="loginpage">
                   
                    <br></br>
                    <h2 style={{textAlign:"center"}}>Login</h2>
                    
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                      
                        <div className="divblack">
                          <Row>
                            <Col  md={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-envelope"></i></Col>
                          <Col md="8">
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          className='mb-3'
                          onChange={this.onChange}
                        />
                        </Col>
                        </Row>
                        </div>
                        
                     
                      
                        <div className="divblack">
                          <Row >
                            <Col md={{size:2,offset:1}} style={{textAlign:"center",borderRadius:"50%"}}><i class="fas fa-key"></i></Col>
                          <Col md="8">
                        <Input
                          type='password'
                          name='password'
                          id='password'
                          placeholder='Password'
                          className='mb-3'
                          onChange={this.onChange}
                        />
                        </Col>
                        </Row>
                        </div>
              <br></br>
              <Col md={{size:10,offset:1}} style={{textAlign:"center"}}>
              <Button color='dark' >
                          Login
                        </Button>
              </Col>
              <br></br>
              <Row>
              <Col md={{size:5,offset:1}} style={{textAlign:"left",textDecoration:"underline"}}><NavLink href="/forgot"><small>Forgot Password?</small></NavLink></Col>
                <Col md={{size:5,offset:1}} style={{textDecoration:"underline"}}><NavLink href="/signup"><small>Didn't have account yet!</small></NavLink></Col>  
                </Row>       
                      </FormGroup>
                    </Form>
            
                  </Col>
                  
                </Row>
                <br>
                </br>
                <br></br><br></br><br></br>
                <Footer></Footer>
                <LastFooter></LastFooter>
              </div>

            )}
        </Media>
   
      );
    
  }
}
const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);