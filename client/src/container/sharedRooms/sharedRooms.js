import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Badge,NavLink } from 'reactstrap';
    import './sharedRooms.css';
const sharedRooms=(props)=>{
    return(
      <div className="srd">
      <Card style={{margin:"15px 0px"}} className="srdCard">
        {/* <CardImg top width="100%" src={props.imgSrc} alt="Card image cap" >Hello</CardImg> */}
        <div classname="positionimg">
          <img src={props.imgSrc} alt="card image cap" style={{width:"368px",height:"180px"}}/>
         
  <div class="top-left"> <Badge color="success" pill style={{padding:"5px 7px"}}> Boys</Badge></div>
  <div class="top-right"><Button color="danger" outline style={{margin:"0px",border:"none",borderRadius:"0px",padding:".1rem .5rem"}}onClick={()=>alert("added to wishlist")}><i class="fas fa-heart"></i></Button></div>

        </div>
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
        <NavLink href={props.linkvisit}> <Button color="dark"  outline  size="md" style={{marginLeft:"95px",marginRight:"95x"}}>Schedule Visit</Button>
            </NavLink>
          
          
          
        </CardBody>
      </Card>
    </div>
        
    );
}
export default sharedRooms;