import React, { Component } from 'react'
import WOW from 'wowjs';
import {Row,Col} from 'reactstrap';
export class playgrund extends Component {
    componentDidMount()
    {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div>
                <Row style={{backgroundColor:"black",margin:"0px"}}>
                    <Col md="4">
                    <section  style={{backgroundColor:"black",width:"100%", height:"100vh"}}>
                    <div id="piccheck" className="wow bounceInLeft" data-wow-duration="1s"  >
                        <img src={require('../../image/picblack.jpeg')} height="600px" alt="picblack"></img>
                    </div>
                    </section>
                    </Col>
                    <Col md="8" style={{color:"white",textAlign:"center",marginTop:"190px"}}className="wow slideInUp" data-wow-duration="2s" >
                       <h1>Home is place where </h1>
                       <h1>you make it yours</h1> 
                    </Col>
                    </Row> 
                    <Row style={{width:"100%",height:"100vh"}}>
                    <Col md="8" style={{textAlign:"center"}}className="wow slideInUp" data-wow-duration="2s" >
                       <h1>Home is place where </h1>
                       <h1>you make it your</h1> 
                    </Col>
                        </Row>           
            </div>
        )
    }
}

export default playgrund
