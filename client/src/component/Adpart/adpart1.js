import React,{Component} from 'react';
import Media from 'react-media';
import {Col,Row,Button,NavLink} from 'reactstrap';
import './adpart1.css';
class Adpart extends Component{
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
                <h3>Savings done when you rent with iRooms</h3>
              <NavLink href="/signup"><Button color="success" size="sm">Join us now!</Button></NavLink> 
                </Col>
            </Row>
            <br></br>
            <div className="iconMobile">
                <div className="iconElement">
                <i class="fas fa-user-secret" id="adIcon1"></i>
                <br></br> <br></br>
                <h5>No</h5>
                <h5>Brokerage</h5>
                </div>
                <div className="iconElement">
                <i class="fas fa-rupee-sign" id="adIcon1"></i>
                <br></br> <br></br>
                <h5>Affordable</h5>
                <h5>Rents</h5>
                </div>
                <div className="iconElement">
                <i class="fas fa-wallet" id="adIcon1"></i>
                <br></br> <br></br>
                <h5>Low Secuirty</h5>
                <h5>Deposit</h5>
                </div>
            </div>
            
        </div>
        
        ) : (
            <div className="adSectionch">
    <Row style={{padding:"25px",margin:"0px"}}>
<Col md="3">
    <h3>Savings done when you rent with iRooms</h3><br></br>
  <NavLink href="/signup"> <Button color="success">Join us now!</Button></NavLink> 
</Col>
<Col md="3">
<i class="fas fa-user-secret" id="adIconch"></i><br></br><br></br>
<h4>No Brokerage</h4>
<small>Submit house details and <br></br>get house verified</small>
</Col>
<Col md="3">
<i class="fas fa-rupee-sign" id="adIconch"></i><br></br><br></br>
<h4>Affordable Rents</h4>
<small>Make your deal and <br></br>sign agreement </small>
</Col>
<Col md="3">
<i class="fas fa-wallet" id="adIconch"></i><br></br><br></br>
<h4>Low Security Deposit</h4>
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
export default Adpart;