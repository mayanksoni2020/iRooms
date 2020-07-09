import React, { Component } from 'react'
import CompleteHeader from '../CompleteHeader/completeHeader';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';
import Media from 'react-media';

import WOW from "wowjs";
import{Row,Col} from 'reactstrap';

import './aboutus.css';


export class aboutus extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
      state={
          bool:""
      }
    render() {
        return (
            <Media query="(max-width:800px)">
                {matches =>
                    matches ? (
                        <div>
                            <CompleteHeader></CompleteHeader>
                        <div className="wow slideInLeft">
                        <h1 style={{color:"mediumseagreen",margin:"15px"}}>Who we are?</h1>
                        </div>
                        <Row style={{margin:"5px 25px"}}>
                            <Col xs="5" id="smallBox" style={{margin:"10px"}}><h5>Designers</h5></Col>
                            <Col xs="5" id="smallBox" style={{margin:"10px"}}><h5>Thinkers</h5></Col>
                        </Row>
                        <Row style={{margin:"5px 25px"}}>
                            <Col xs="5" id="smallBox" style={{margin:"10px"}}><h5>Collabortors</h5></Col>
                            <Col xs="5" id="smallBox" style={{margin:"10px"}}><h5>Managers</h5></Col>
                        </Row>
                       
                        </div>

                    ) : (
                    
                    <div>
                        <CompleteHeader></CompleteHeader>
                        <div className="aboutus_main">
                       
                        </div>
                        <Row style={{height:"100vh",backgroundColor:"#FF5470"}}>
                            <Col md="6">
                                <div style={{padding:"200px 120px"}}>
                                    <p className="brandname"><b>Our company</b></p>
                                    <div style={{wordSpacing:"1px",marginTop:"20px"}}>
                                    <p className="branddetail"><b style={{color:"#252525",fontSize:"24px"}}>iRooms</b> is India's emerging <span>"Home Rental Service Provider"</span> focused to provide a higher quality of living with the help of our desgined platform
                                  </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">

<div style={{padding:"100px"}}>
    <img src={require ('../../image/aboutus.jpeg')} style={{width:"450px",height:"450px"}}/>
</div>
</Col>
                        </Row>
                        <Row style={{height:"100vh"}}>
                            <Col md="12">
                                <div style={{textAlign:"center",padding:"15% 250px"}}>
                                    <p className="brandname"><b>The world's first customer messaging platform for bussiness growth
                                </b>
                                </p>
                                </div>
                            </Col>
                            
                        </Row>
                        <Row style={{margin:"0px",padding:"0px"}}>
                        <Col md="12" style={{padding:"0px",margin:"0px"}}>
                                <div style={{backgroundColor:"#252525",textAlign:"center",color:"white"}}>
                                    <p style={{margin:"0px"}} className="branddesc">MEET THE TEAM</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{margin:"0px",padding:"0px"}} className="trydiv">
                          <Col md="5">
                              <div style={{padding:"0px 85px"}}>
                                  <img src={require('../../image/man.png')} style={{height:"600px",width:"350px"}}/>
                              </div>
                          </Col>
                            <Col md="7">
                                <br></br><br></br>
                              <div style={{padding:"25px 55px"}}>
                                  <p style={{fontSize:"51px",letterSpacing:"6px",margin:"0px",fontFamily:"'Montserrat', sans-serif",fontWeight:"500"}}>PHIL SHACKLETON</p>
                                <p style={{fontSize:"22px",letterSpacing:"2px",margin:"0px",fontFamily:"'Montserrat', sans-serif",fontWeight:"500",color:"#d62323"}}>FOUNDER & DIGITAL DIRECTOR</p><br></br>
                                <p style={{fontSize:"18px",letterSpacing:"0px",margin:"0px",fontFamily:"'PT Serif', serif",fontWeight:"500",color:"#252525"}}>
                                Phil co-founded Mixd with Mike Danford in 2004 and now guides the company’s technical direction. As an expert in usability and user centred design, he has led large-scale UX projects, focussing on speed of innovation, usability and service design in the NHS and other public sectors.
<br></br><br></br>
You could describe Phil as a mountain biker, road cyclist, outdoor pursuits instructor and owner of a dog called Surprise.

                                </p>
                              
                              </div>
                            </Col>
                        </Row>
                        <Row style={{margin:"0px",padding:"0px"}} className="trydiv1">
                        <Col md="7">
                                <br></br><br></br>
                              <div style={{padding:"25px 55px"}}>
                                  <p style={{fontSize:"51px",letterSpacing:"6px",margin:"0px",fontFamily:"'Montserrat', sans-serif",fontWeight:"500"}}>PHIL SHACKLETON</p>
                                <p style={{fontSize:"22px",letterSpacing:"2px",margin:"0px",fontFamily:"'Montserrat', sans-serif",fontWeight:"500",color:"#d62323"}}>FOUNDER & DIGITAL DIRECTOR</p><br></br>
                                <p style={{fontSize:"18px",letterSpacing:"0px",margin:"0px",fontFamily:"'PT Serif', serif",fontWeight:"500",color:"#252525"}}>
                                Phil co-founded Mixd with Mike Danford in 2004 and now guides the company’s technical direction. As an expert in usability and user centred design, he has led large-scale UX projects, focussing on speed of innovation, usability and service design in the NHS and other public sectors.
<br></br><br></br>
You could describe Phil as a mountain biker, road cyclist, outdoor pursuits instructor and owner of a dog called Surprise.

                                </p>
                              
                              </div>
                            </Col>
                          <Col md="5">
                              <div style={{padding:"0px 85px"}}>
                                  <img src={require('../../image/man1.png')} style={{height:"600px",width:"350px"}}/>
                              </div>
                          </Col>
                           
                        </Row>
                            <Row>
                                <Col md="12">
                                    <div style={{textAlign:"center",backgroundColor:"#D62323"}}>
                                        <p style={{margin:"0px",fontSize:"13px",color:"white",padding:"20px 0px",fontFamily:"'Montserrat', sans-serif",fontWeight:"500",letterSpacing:"1px"}}> 
                                        WE ARE ALWAYS LOOKING TO EXPAND OUR TEAM WITH AMAZING NEW TALENT.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Footer></Footer>
                            <LastFooter></LastFooter>
                    </div>

)}
            </Media>

        )
    }
}

export default aboutus
