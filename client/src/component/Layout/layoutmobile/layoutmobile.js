import React, { Component } from 'react'
import CompeleteHeader from '../../CompleteHeader/completeHeader';
import './layoutmobile.css';
import {Row,Col,Input,Button,Card,CardTitle,CardBody,CardImg,CardText,NavLink} from 'reactstrap';
import Advertisment from '../Advertisment/advertisment';
import PopularRooms from '../../Popular/popularRooms';
import Service from '../../Services/ServiceMain';
import Footer from '../../Footer/footer';
import LastFooter from '../../Footer/lastFooter';
import Feedback from '../../Feedback/feedback';
import Counter from '../../../Counter/counter';

export class layoutmobile extends Component {
    render() {
        return (
            <div>
               <CompeleteHeader></CompeleteHeader> 
               <div className="smallBanner">
          <div className="partOne" style={{textAlign:"center"}} >
          <h1 style={{fontSize:"5rem",fontWeight:700,paddingTop:"25px",margin:"0px"}}><u style={{color:"#F6E045"}}><span style={{color:"#FFFF41"}}>i</span></u><u>Rooms</u>
          </h1>
         <h5>  Let us guide you a home, a better quality of living </h5>
            </div>
            <br>
            </br>
            <br></br>
            <br></br>
            <div className="partTwo">
          <Row style={{margin:"0px 10px"}}>
            <Col  xs={{ size:9}} style={{padding:"0px"}}>
            <Input type="text"placeholder="Search locality/City" style={{borderRadius:"0px",backgroundColor:"black",border:"1px solid #272727",padding:"15px 15px",color:"white",opacity:"1"}}></Input>
            </Col>
            <Col xs="2" style={{padding:"0px"}}>
            <Button color="info" style={{padding:"6px 12px",borderRadius:"0px",letterSpacing:"1px"}}><b>Search</b></Button>
            </Col>
          </Row>
          </div>
            </div>
            <br></br>
            <div className="mobileSlider">
               <div class="slidemob" id="slide-1">
               <Card>
                  <CardImg top width="100%" src={require("../../../image/shared.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                  {/* <div className="middle">
                   <div className="text"> <p>&#x20b9;4,999 - &#x20b9; 9,499</p></div> 
                  </div> */}
                  <CardBody>
                    <CardTitle><h5>Shared Rooms</h5></CardTitle>
                    <CardText>Rent a fully furnished or semi furnished room for 2 or more than 2 boys or girls.</CardText>
                  <br></br><NavLink href="/sharedrooms">  <Button color="info">Explore more</Button></NavLink>
                  </CardBody>
                </Card>
               </div>
               <div class="slidemob" id="slide-2">
               <Card>
                  <CardImg top width="100%" src={require("../../../image/private.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                  {/* <div className="middle">
                   <div className="text"> <p>&#x20b9;4,999 - &#x20b9; 9,499</p></div> 
                  </div> */}
                  <CardBody>
                    <CardTitle><h5>Private Rooms</h5></CardTitle>
                    <CardText>Rent a 1-BHK or 2-BHK fully furnished or semi furnished flat for group of friends or family.</CardText>
                    <br></br><NavLink href="/privaterooms">  <Button color="info">Explore more</Button></NavLink>
                  </CardBody>
                </Card>
          
               </div>
               <div class="slidemob" id="slide-3">

               <Card >
                  <CardImg top width="100%" src={require("../../../image/family.jpg")} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                  {/* <div className="middle">
                   <div className="text"> <p>&#x20b9;4,999 - &#x20b9; 9,499</p></div> 
                  </div> */}
                  <CardBody>
                    <CardTitle><h5>Full House</h5></CardTitle>
                    <CardText>Rent a full house with managed furniture and kitchen for friends or family.</CardText>
                    <br></br><NavLink href="/familyrooms">  <Button color="info">Explore more</Button></NavLink>
                  </CardBody>
                </Card>
          
               </div>
             </div>
             <br></br>
             <Advertisment></Advertisment>
             <br></br>
             <PopularRooms  name="Popular Rooms Based on Locality"></PopularRooms>
                  <br></br>
             <Service></Service>
             <br></br>
             <div>
  <Counter checkRun={true}
valueCount="25"
  valueCount1="280"
  valueCount2="560"
  valueCount3="750"></Counter>
  </div>
  <br></br><br></br>
  <Feedback></Feedback>
  <br></br>
  <Footer></Footer>
  <LastFooter></LastFooter>
            </div>
        )
    }
}

export default layoutmobile
