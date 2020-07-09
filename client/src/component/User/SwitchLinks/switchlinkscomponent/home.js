import React, { Component } from 'react'
import './home.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Jumbotron, Button,Row,Col } from 'reactstrap';
class Home extends Component {
  static propTypes={
    auth:PropTypes.func.isRequired
  }
    render() {
        return (
            <div>
            <Jumbotron className="bigflex">
        <h1>Hello,there</h1>
        <p className="lead">We help Students & Professionals in getting there dreamt rent house using our provided platform to search rooms as per your choice. Book Now and live a better quality living with iRooms.</p>
        <hr className="my-2" />
        <p>Still having doubts? Contact our customer care for free guiding.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Row>
        <Col md="4">
        <Jumbotron className="bigflexsmall">
        <h6 class="display-4" style={{textAlign:"center",fontSize:"28px"}}>Total visits</h6>
        <h1 style={{textAlign:"center"}}>0</h1>
      
      </Jumbotron>
        </Col>
        <Col md="4">
        <Jumbotron className="bigflexsmall">
        <h6 class="display-4" style={{textAlign:"center",fontSize:"28px"}}>Wallet Balance</h6>
        <h1 style={{textAlign:"center"}}>0</h1>
      
      </Jumbotron>
        </Col>
        <Col md="4">
        <Jumbotron className="bigflexsmall">
        <h6 class="display-4" style={{textAlign:"center",fontSize:"28px"}}>Wish lisit</h6>
        <h1 style={{textAlign:"center"}}>0</h1>
      
      </Jumbotron>
        </Col>
        </Row>
       
      </div>
        
        )
    }
}
const mapStateToProps=(state)=>({
  auth:state.auth
})
export default connect(mapStateToProps,null)(Home);


