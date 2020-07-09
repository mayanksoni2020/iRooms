import React,{Component} from 'react';
import { Jumbotron, Button,Row,Col } from 'reactstrap';

class Visit extends Component {
    render(){
  return (
    <div>
        <Row>
            <Col md="6">
            <Jumbotron style={{backgroundColor:"white",border:"3px solid mediumseagreen"}}>
        <h5>Visit to Sahnti Devi Mittal,</h5>
        <h6>On Aug,17 2019 with Ram kumar </h6>
      </Jumbotron>
            </Col>
            <Col md="6">
            <Jumbotron style={{backgroundColor:"white",border:"3px solid mediumseagreen"}}>
            <h5>Visit to New Complex Delhi,</h5>
        <h6>On Jun,17 2019 with Lakshman kumar </h6>
      </Jumbotron>
            </Col>
        </Row>
      
    </div>
  );
}
};

export default Visit;