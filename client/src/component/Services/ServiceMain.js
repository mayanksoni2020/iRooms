import React, { Component } from 'react';
import {Row,Col,Jumbotron,Button} from 'reactstrap';
import './services.css';
import Media from 'react-media';
export class ServiceMain extends Component {
    render() {
        return (
            <Media query="(max-width:800px)">
      {matches =>
        matches ? (
           <div>
               <div className="mainblackdiv">
                   
               <Row style={{paddingTop: "30px",color:"white",margin:"0px"}}>
                   <Col md="3" style={{margin:"4%"}}>
                   <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom, #623BBB, #3324AF)", background: "linear-gradient(to bottom, #623BBB, #3324AF)"}}>
      
              
        <div className="circle"></div>
        <div className="title">  <h3>Furnished Room</h3></div>
        <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
        <div className="desc">
            <p>We provide you fully & semi furnished rooms with modern amenities</p>
        </div>
      </Jumbotron>
                   </Col>
                   <Col md="3" style={{margin:"4%"}} >
                   <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom,#11C2D2, #08AFE8)", background: "linear-gradient(to bottom,#11C2D2, #08AFE8)"}}>
     
        <div className="circle1"></div>
        <div className="title">  <h3>Fresh Meals</h3></div>
        <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
        <div className="desc">
            <p>We provide fresh meals covering breakfast, lunch and dinner everyday</p>
        </div>
      </Jumbotron>
                   </Col>
                   <Col md="3" style={{margin:"4%"}}>
                   <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom,#FF7A07,#FD5100)", background: "linear-gradient(to bottom,#FF7A07, #FD5100)"}} >
                   <br></br>         
        <div className="circle2">
           
        </div>
        <br></br>
        <div className="title">  <h3>Laundry Services</h3></div>
        <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
        <div className="desc">
            <p>We provide on demand laundry services to tenants at their door step</p>
        </div>
      </Jumbotron>
                   </Col>
               </Row>
           </div>
           </div>
        ) : (
            <div>
            <div className="mainblackdiv">
                
            <Row style={{paddingTop: "30px",color:"white"}}>
                <Col md="3" style={{margin:"4%"}}>
                <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom, #623BBB, #3324AF)", background: "linear-gradient(to bottom, #623BBB, #3324AF)"}}>
   
           
     <div className="circle"></div>
     <div className="title">  <h3>Furnished Room</h3></div>
     <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
     <div className="desc">
         <p>We provide you fully & semi furnished rooms with modern amenities</p>
     </div>
   </Jumbotron>
                </Col>
                <Col md="3" style={{margin:"4%"}} >
                <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom,#11C2D2, #08AFE8)", background: "linear-gradient(to bottom,#11C2D2, #08AFE8)"}}>
  
     <div className="circle1"></div>
     <div className="title">  <h3>Fresh Meals</h3></div>
     <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
     <div className="desc">
         <p>We provide fresh meals covering breakfast, lunch and dinner everyday</p>
     </div>
   </Jumbotron>
                </Col>
                <Col md="3" style={{margin:"4%"}}>
                <Jumbotron style={{ background: "-webkit-linear-gradient(to bottom,#FF7A07,#FD5100)", background: "linear-gradient(to bottom,#FF7A07, #FD5100)"}} >
                <br></br>         
     <div className="circle2">
        
     </div>
     <br></br>
     <div className="title">  <h3>Laundry Services</h3></div>
     <hr style={{margin:"15px 15px",borderColor:"#fafafa"}}></hr>
     <div className="desc">
         <p>We provide on demand laundry services to tenants at their door step</p>
     </div>
   </Jumbotron>
                </Col>
            </Row>
        </div>
        </div>
        )
      }
      </Media>
          
        )
    }
}

export default ServiceMain
