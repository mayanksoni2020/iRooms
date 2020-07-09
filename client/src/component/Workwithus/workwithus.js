import React, { Component } from 'react'
import './workwithus.css';
import CompleteHeader from '../CompleteHeader/completeHeader';
import {Row,Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter'; 
import Media from 'react-media';
export class workwithus extends Component {
    render() {
        return (
            <div>
            <Media query="(max-width: 800px)">
              {matches =>
                matches ? (
                    <div>
                    <CompleteHeader></CompleteHeader>
               <div className="mainpartWorkMob">
                   <h3 style={{fontSize:"36px"}}>We are looking <br></br>for Young talented<br></br>minds </h3>
                  <div style={{backgroundColor:"black",opacity:"0.9",color:"white",display:"inline-block",padding:"6px 8px"}}> <h5 style={{margin:"0px"}}>For various poisitions</h5>
               
                  </div></div>
                  <br></br>
               <div>
                   <div style={{margin:"5px"}}>
                    <Row style={{margin:"0px"}}>
                    <Col xs="12" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/fd.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>FRONT-END WEB DEVELOPER</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>Deep knowldege in HTML, CSS, BOOTSTRAP, JAVASCRIPT. Must have some experinece with any framework </CardText>
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      </Col>
      <Col xs="12" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/coder.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>BACK-END WEB DEVELOPER</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>Deep knowldege in JAVASCRIPT, MONGODB, REST API. Must have some experinece with any framework </CardText>
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      
                        </Col>
                        <Col xs="12" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/greee.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>GRAPHIC DESIGNER</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>Deep knowldege in VECTOR, SVG, ANIMATION. Must have some experinece with aAdobe Illustrator </CardText>
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      
                        </Col>
                        
                    </Row>
                   </div>
               </div>
    
                <div>
                    
                   <div style={{margin:"5px"}}>
                    <Row style={{margin:"0px"}}>
                    <Col xs="12" md="4" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/digitalmarket.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>DIGITAL MARKETING</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>knowldege in Google Ads, Email Marketing, Social Media Marketing. Must have some experience in digital marketing</CardText>
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      </Col>
      <Col xs="12" md="4" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/dataan.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>DATA ANALYST</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>Deep knowldege in Python, Pytorch, Excel. Must have some prior experinece of 1 Year Min with some good projects  </CardText>
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      
                        </Col>
                        <Col xs="12" style={{padding:"0px",margin:"0px"}}>
                        <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                            <div style={{margin:"2px 15px"}}>
            <CardImg top width="100%" src={require('../../image/roomser.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
           </div> <CardBody>
              <CardTitle><b>GRAPHIC DESIGNER</b></CardTitle>
              <CardSubtitle>Skills Required</CardSubtitle>
              <CardText>Deep knowldege regarding various electrical devices.Having deep understanding of electrical component.Must have experience of min 1Year </CardText> 
              <br></br>
              <Button color="success">Click to know more</Button>
            </CardBody>
          </Card>
      
                        </Col>
                        
                    </Row>
                   </div>
               </div>
               <br></br>
               <Footer></Footer>
               <LastFooter></LastFooter>
               </div>
                ) : (
                  
                    <div>
                <CompleteHeader></CompleteHeader>
           <div className="mainpartWork">
               <h1 style={{fontSize:"64px"}}>We are looking <br></br>for Young talented<br></br>minds </h1>
              <div style={{backgroundColor:"black",opacity:"0.9",color:"white",display:"inline-block",padding:"0px 15px"}}> <h2>For various open poisitions </h2>
           
              </div></div>
           <div>
               <div style={{margin:"100px 10%"}}>
                <Row style={{margin:"0px"}}>
                <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/fd.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>FRONT-END WEB DEVELOPER</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>Deep knowldege in HTML, CSS, BOOTSTRAP, JAVASCRIPT. Must have some experinece with any framework </CardText>
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  </Col>
  <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/coder.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>BACK-END WEB DEVELOPER</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>Deep knowldege in JAVASCRIPT, MONGODB, REST API. Must have some experinece with any framework </CardText>
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  
                    </Col>
                    <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/greee.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>GRAPHIC DESIGNER</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>Deep knowldege in VECTOR, SVG, ANIMATION. Must have some experinece with aAdobe Illustrator </CardText>
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  
                    </Col>
                    
                </Row>
               </div>
           </div>

           {/* This is done by Mayank */}
            <div className="sections">
                <div className="div1">
                    <h1 class="display-3">We are among the fastest growing startup's in India</h1>
                </div>
                <div className="div2">
                    <div className="div3">
                        <img src={require('../../image/flr.svg')} alt="Startup" width="250px" height="250px"></img>
                    </div>
                </div>
            </div>
            
{/* mayank part ends */}
            <div>
                
               <div style={{margin:"100px 10%"}}>
                <Row style={{margin:"0px"}}>
                <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/digitalmarket.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>DIGITAL MARKETING</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>knowldege in Google Ads, Email Marketing, Social Media Marketing. Must have some experience in digital marketing</CardText>
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  </Col>
  <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/dataan.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>DATA ANALYST</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>Deep knowldege in Python,Pytorch,Excel. Must have some prior experinece of 1 Year Min with some good projects  </CardText>
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  
                    </Col>
                    <Col md="4" style={{padding:"0px",margin:"0px"}}>
                    <Card style={{textAlign:"center",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{margin:"2px 15px"}}>
        <CardImg top width="100%" src={require('../../image/roomser.jpg')} alt="Card image cap" style={{borderRadius:"50%",width:"200px",height:"200px"}} />
       </div> <CardBody>
          <CardTitle><b>GRAPHIC DESIGNER</b></CardTitle>
          <CardSubtitle>Skills Required</CardSubtitle>
          <CardText>knowldege regarding various electrical devices.Having deep understanding of electrical component.Must have experience of min 1Year </CardText> 
          <br></br>
          <Button color="success">Click to know more</Button>
        </CardBody>
      </Card>
  
                    </Col>
                    
                </Row>
               </div>
           </div>
           <Footer></Footer>
           <LastFooter></LastFooter>
           </div>

                )
              }
            </Media>
          </div>

            
          
        )
    }
}

export default workwithus
