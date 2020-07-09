import React,{Component} from 'react';
import './ad.css';
import {Row,Col,Button,NavLink} from 'reactstrap';
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
                      <h3>Three simple steps to list your property</h3>
                   <NavLink href="/listproperty"><Button color="success" size="sm">List Your Property</Button></NavLink>
                      </Col>
                  </Row>
                  <br></br>
                  <div className="iconMobile">
                      <div className="iconElement">
                      <i class="fas fa-file-alt" id="adIcon1"></i>
                      <br></br> <br></br>
                      <h5>Submit</h5>
                      <h5>Details</h5>
                      </div>
                      <div className="iconElement">
                      <i class="fas fa-file-contract" id="adIcon1"></i>
                      <br></br> <br></br>
                      <h5>Sign</h5>
                      <h5>Agreement</h5>
                      </div>
                      <div className="iconElement">
                      <i class="fas fa-building" id="adIcon1"></i>
                      <br></br> <br></br>
                      <h5>Get</h5>
                      <h5>Tenants</h5>
                      </div>
                  </div>
                  
              </div>
            ) : (
                <div className="adSection">
        <Row style={{padding:"25px",margin:"0px"}}>
    <Col md="3">
        <h3>Three simple steps to list your property</h3><br></br>
        <NavLink href="/listproperty"><Button color="success">List Your property</Button></NavLink> 
    </Col>
    <Col md="3" id="shiftID">
    <i class="fas fa-file-alt" id="adIcon"></i><br></br><br></br>
    <h4>Submit Details</h4>
    Submit house details and <br></br>get house verified
    </Col>
    <Col md="3" id="shiftID">
    <i class="fas fa-file-contract" id="adIcon"></i><br></br><br></br>
    <h4>Sign Agreement</h4>
    Make your deal and <br></br>sign agreement 
    </Col>
    <Col md="3" id="shiftID">
    <i class="fas fa-building" id="adIcon"></i><br></br><br></br>
    <h4>Get Tenants</h4>
    Get tenants after verification process <br></br>within a few weeks
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