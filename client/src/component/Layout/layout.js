import React, { Component } from 'react'
import {Input,Row,Col,Button,Card,CardBody,CardImg,CardTitle,NavLink,CardText,Jumbotron} from 'reactstrap';
import CompleteHeader from '../CompleteHeader/completeHeader';
import PopularRooms from '../Popular/popularRooms';
import Advertisment from './Advertisment/advertisment';
import Service from '../Services/ServiceMain';
import './layout.css'
import Feedback from '../Feedback/feedback';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import Media from 'react-media';
import MobileLayout from './layoutmobile/layoutmobile';
import Counter from '../../Counter/counter';
export class Layout extends Component {

  state={
    boolCheck:false
  }
  render() {
console.log(this.state.boolCheck)
    return (
      <Media query="(max-width:800px)">
      {matches =>
        matches ? (
          <MobileLayout></MobileLayout>
        ) : (
          <div>
          <CompleteHeader></CompleteHeader>
          
          <div className="bigBanner">
          <div className="partOne" style={{textAlign:"center"}} >
            <h1 style={{fontSize:"10rem",fontWeight:700,paddingTop:"60px",margin:"0px"}}><u style={{color:"#F6E045"}}><span style={{color:"#FFFF41"}}>i</span></u><u>Rooms</u>
          </h1>
          {/* <br></br>
         <h3 style={{color:"#B9DEFE",backgroundColor:"#272727",display:"inline",padding:"5px 5px",opacity:"0.88"}}>[ Let us guide you a home, a better quality of living ]</h3> */}
              <h5>  Let us guide you a home, a better quality of living </h5>
            </div>
            <br></br><br></br> <br></br><br></br>
          <div className="partTwo">
          <Row style={{margin:"0px 25%"}}>
            <Col  md={{ size:10}} style={{padding:"0px"}}>
            <Input type="text"placeholder="Search locality/City" style={{borderRadius:"0px",backgroundColor:"black",border:"1px solid #272727",padding:"25px 25px",color:"white",opacity:"1"}}></Input>
            </Col>
            <Col md="2" style={{padding:"0px"}}>
            <Button color="info" style={{padding:"13px 20px",borderRadius:"0px",letterSpacing:"2px",fontfamily:" 'Montserrat', sans-serif"}}> SEARCH</Button>
            </Col>
          </Row>
          </div>
          </div>
  {/* starting the first three div */}
  <br></br>
   <div className="flex-container">
              <div>
              <Card>
                    <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                  
                    <CardBody>
                      <CardTitle><h5>Shared Rooms</h5></CardTitle>
                     
                      <CardText>Rent a fully furnished or semi furnished room for 2 or more than 2 boys or girls.</CardText>
                      <br></br><NavLink href="/sharedrooms"> <Button color="info">Explore more</Button></NavLink>
                    </CardBody>
                  </Card>
            
              </div>
              <div>
              <Card>
                    <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image"/>
                    
                    <CardBody>
                      <CardTitle><h5>Private Rooms</h5></CardTitle>
                      <CardText>Rent a 1-BHK or 2-BHK fully furnished or semi furnished flat for group of friends or family.</CardText>
                    <br></br> <NavLink href="/privaterooms"><Button color="info">Explore more</Button></NavLink> 
                    </CardBody>
                  </Card>
            
              </div>
              <div>
              <Card>
                    <CardImg top width="100%" src={require("../../image/family.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                    <CardBody>
                      <CardTitle><h5>Full House</h5></CardTitle>
                      <CardText>Rent a full house with managed furniture and kitchen for friends or family.</CardText>
                  <br></br>   <NavLink href="/familyrooms"> <Button color="info">Explore more</Button></NavLink>
                    </CardBody>
                  </Card></div>  
            </div>
            {/* second part of z-index ends */}
            <Advertisment></Advertisment>
            <br></br> <br></br> <br></br>
           {/* This is done by Mayank */}
           
           <div className="sections" style={{margin:"50px 0px"}}>
      
                  <div className="div1">
                    <br></br>
                      <h1><q> Money saved today can be invested in party Tommorow </q>
                     </h1>
                     <h2 style={{textAlign:"right",color:"#6DC1FF"}}><small>-By iRooms</small></h2>
                     <br></br>
                     <h3 style={{color:"#FDBF00"}}>Save more on rent with iRooms</h3>
                     <br></br>
                     <Button color="success" outline>Explore iRooms</Button>
                  </div>
                  <div className="div2">
                      <div className="div3">
                          <img src={require('../../image/money-bag.svg')} alt="Startup" width="250px" height="250px"></img>
                      </div>
                  </div>
              </div>
              
  {/* mayank part ends */}
  <br></br>
  <PopularRooms  name="Popular Rooms Based on Locality"></PopularRooms>
  <br></br><br></br>
  <Service></Service>
  <br></br><br></br>
  <div>
  <Counter checkRun={true}
valueCount="25"
  valueCount1="280"
  valueCount2="560"
  valueCount3="750"></Counter>
  </div>
  <Feedback></Feedback>

  <br></br><br></br>
  <Footer></Footer>
  <LastFooter></LastFooter>
        </div>
        )
      }
    </Media>
     
    )
  }
}

export default Layout;
