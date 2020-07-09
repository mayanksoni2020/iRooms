import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Badge,NavLink } from 'reactstrap';
    import './sharedRooms.css';
const sharedRooms=(props)=>{
    return(
      <div className="srdmob">
      <Card style={{margin:"15px 0px"}} className="srdCardmob">
        <CardImg top width="100%" src={props.imgSrc} alt="Card image cap" />
        <CardBody className="cardSSD">
         <CardTitle> <span><h6 style={{color:"#535353",margin:"0px", display:"inline-block" }}>House Id:-{props.houseId}</h6> <Badge color="danger" pill> {props.statusTag}</Badge></span></CardTitle> 
          <CardSubtitle><h5 style={{margin:"2px"}}>{props.houseName}</h5></CardSubtitle>
          <CardText>{props.houseDistance}km away from LPU<br></br>
          <small style={{color:"#435762"}}>{props.furnished} furnished | {props.area} Sq Ft | {props.bedding} Bed Available</small>
          </CardText>
          <hr></hr>
          <div className="insideSRD">
              <div><small style={{color:"#435762",textAlign:"center"}}>Rent From</small><br>
              </br>
              <h6>&#8377;{props.houseRent}<small> /room</small></h6>
              </div>
              <div><small style={{color:"#435762",textAlign:"center"}}>Security Deposit</small><br>
        </br>
              <h6>{props.securityDeposit} Months Rent </h6></div>
          </div>
          <hr></hr>
        <NavLink href={props.linkvisit}> <Button color="dark"  outline  size="sm" style={{margin:"0px 60px"}} >Schedule Visit</Button>
        </NavLink> 
        </CardBody>
      </Card>
    </div>
        
    );
}
export default sharedRooms;