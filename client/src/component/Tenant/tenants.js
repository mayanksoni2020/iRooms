import React,{Component} from 'react';
import '../Layout/Advertisment/ad.css';
import {Row,Col,Button} from 'reactstrap';
import Media from "react-media";
class Advertisment extends Component{
    render()
    {
        return(
            <div>
                <Media query="(max-width: 800px)">
                {matches =>
            matches ? (
              <div className="adSectionMobile">
                  <Row style={{padding:"25px",margin:"0px"}}>
                      <Col sm="12">
                      <h3>Save more when you rent with iRooms</h3>
                      <Button color="success" size="sm">Join us now !!</Button>
                      </Col>
                  </Row>
                  <br></br>
                  <div className="iconMobile">
                      <div className="iconElement">
                      <i class="fas fa-user-secret" id="adIcon"></i>
                      <br></br> <br></br>
                      <h5>Zero</h5>
                      <h5>Brokerage</h5>
                      </div>
                      <div className="iconElement">
                      <i class="fas fa-rupee-sign" id="adIcon"></i>
                      <br></br> <br></br>
                      <h5>Reasonable</h5>
                      <h5>Rents</h5>
                      </div>
                      <div className="iconElement">
                      <i class="fas fa-wallet" id="adIcon"></i>
                      <br></br> <br></br>
                      <h5>Low</h5>
                      <h5>Security Depoist</h5>
                      </div>
                  </div>
                  
              </div>
            ) : (
                <div className="adSection">
        <Row style={{padding:"25px",margin:"0px"}}>
    <Col md="3">
        <h3>Save more when you rent with iRooms</h3>
        <Button color="success">Join us now !!</Button>
    </Col>
    <Col md="3">
    <i class="fas fa-user-secret" id="adIcon"></i>
    <h4>No Brokerage</h4>
    <small>Submit house details and <br></br>get house verified</small>
    </Col>
    <Col md="3">
    <i class="fas fa-rupee-sign" id="adIcon"></i>
    <h4>Affordable Rents</h4>
    <small>Make your deal and <br></br>sign agreement </small>
    </Col>
    <Col md="3">
    <i class="fas fa-wallet" id="adIcon"></i>
    <h4>Low Security Depoist</h4>
    <small>Get verified tenants <br></br>within a few weeks</small>
    </Col>
</Row>
            </div>
            )
          }
                </Media>
            </div>
      );
    }
}
export default Advertisment;