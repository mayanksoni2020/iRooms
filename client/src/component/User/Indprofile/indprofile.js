import React, { Component } from 'react'
import {Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Media from 'react-media';
import Footer from '../../Footer/footer';
import LastFooter from '../../Footer/lastFooter';
export class indprofile extends Component {
    render() {
        return (
            <div>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div>
                  <Row>
                      <Col md="12">
                          <div style={{display:"flex",alignItems:"center",padding:"0px 55px"}}>
                          <img src={require('../../../image/avatar3.png')} style={{width:"200px",height:"200px"}}></img>
                          </div>
                          <div style={{textAlign:"center"}}>
                              <h4>@Ydhash12</h4>
                              <h5><small><i>Passionated and dedicated person</i></small></h5>
                          </div>
                          <br></br>
                          <div>
                              <Col md="8">
                          <Form>
        <FormGroup>
          <Input type="text" name="email" id="exampleEmail" value="Dilip Kumar"  style={{border:"none",borderBottom:"1px solid mediumseagreen",backgroundColor:"inherit",fontSize:"1.3rem",color:"black",borderRadius:"0px"}} disabled/>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="email" id="exampleEmail" value="manishkumar199222@gmail.com"  style={{border:"none",borderBottom:"1px solid mediumseagreen",backgroundColor:"inherit",fontSize:"1.3rem",color:"black",borderRadius:"0px"}} disabled/>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="email" id="exampleEmail" value="834068XXXX"  style={{border:"none",borderBottom:"1px solid mediumseagreen",backgroundColor:"inherit",fontSize:"1.3rem",color:"black",borderRadius:"0px"}} disabled/>
        </FormGroup>
        </Form>  
        </Col>
                          </div>
                      </Col>
                  </Row>
                  <br></br>
                  <Footer/>
                  <LastFooter/>
              </div>
            ) : (
                <div>
                <Row>
                    <Col md="12">
                        <div style={{borderRadius:"45px",backgroundImage: "linear-gradient( 63deg,  rgba(242,168,168,1) 2.9%, rgba(94,46,165,1) 102.1% )",display:"flex",flexDirection:"row"}}> 
                            <div>
                            <img src={require ('../../../image/avatar2.png')} style={{width:"400px",height:"400px",display:"block"}}alt="avatar"></img>
                            <h1 style={{textAlign:"center"}}>@ydhash12</h1>
                            <h4 style={{color:"white",textAlign:"center"}}><small><i>I am passionated and enthusiam person</i></small></h4>
                       </div>
                       <div >
                          <Col md="11" class="profileinput" style={{margin:"80px",padding:"15px"}}>
                          <Form>
        <FormGroup>
          
          <Input type="text" name="name" id="namestyle" value="Dilip Kumar"  style={{border:"none",borderBottom:"1px solid white",backgroundColor:"inherit",fontSize:"2rem",color:"white",borderRadius:"0px"}} disabled/>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="email" id="examplePassword" value="manishkumar199222@gmail.com" style={{border:"none",borderBottom:"1px solid #ced4da",backgroundColor:"inherit",fontSize:"2rem",color:"white",borderRadius:"0px"}} disabled/>
        </FormGroup>
        <FormGroup>
          <Input type="text" name="address" id="examplePassword" value="No 4 jharia Dhanabd" style={{border:"none",borderBottom:"1px solid #ced4da",backgroundColor:"inherit",fontSize:"2rem",color:"white",borderRadius:"0px"}} disabled />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="address" id="examplePassword" value="834068XXXX" style={{border:"none",borderBottom:"1px solid #ced4da",backgroundColor:"inherit",fontSize:"2rem",color:"white",borderRadius:"0px"}} disabled />
        </FormGroup>
        </Form>
                          </Col>
                       </div>
                        </div>
                    </Col>
                </Row>

            </div>
            )
          }
        </Media>
      </div>
           
        )
    }
}

export default indprofile
