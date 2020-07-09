import React, { Component } from 'react'
import {Row,Col,Input,Button} from 'reactstrap';
import CompleteHeader from '../../component/CompleteHeader/completeHeader';
import Footer from '../../component/Footer/footer';
import LastFooter from '../../component/Footer/lastFooter';
import './listproperty.css';
import Media from 'react-media';

export class listproperty extends Component {
    render() {
        return (
            <Media query="(max-width:800px)">
            {matches =>
              matches ? (
                <div>
                <CompleteHeader></CompleteHeader>
                <Row style={{margin:"0px"}}>
                    
                    <Col md="4">
                        <div className="listProperty">
                      <form>
                        Your Name
                        <Input type="text" name="yourname" placeholder="Enter your name"></Input>
                        Apartment Name
                        <Input type="text" name="apartmentname" placeholder="Enter apartment/house name"></Input>
                       Number of Rooms
                        <Input type="select" name="selectroom" id="selectroom">
                           <option>--Select Option--</option>
                            <option>Only 1</option>
                            <option>2 to 4</option>
                            <option>4 to 6</option>
                            <option>6 or more</option>
                        </Input>
                        Address
                        <Input type="text" name="phonenum"  id="search_term" placeholder="Enter apartment/house address "></Input>
                        <Row>
                            
                            <Col md="6">
                            City
                            <Input type="number" name="city"  id="search_term" placeholder="City"></Input>
                            </Col>
                            <Col md="6">
                            Pincode
                        <Input type="number" name="phonenum"  id="search_term" placeholder="Area pincode"></Input>
                            </Col>
                        </Row>
                       
                        Phone Number  
                        <Input type="number" name="phonenum" placeholder="Enter your phone number" step="0.01"></Input>
                      
                      </form>
                      <Button color="info" >Submit</Button>
                      </div>
                    </Col>
                </Row>
                
                <Footer></Footer>
                <LastFooter></LastFooter>
            </div>
              ) : (
                <div>
                <CompleteHeader></CompleteHeader>
                <Row style={{margin:"0px"}}>
                    <Col md="6" >
            <img src={require('../../image/90.jpg')} alt="image"></img>
                    </Col>
                    <Col md="4">
                        <div className="listProperty">
                      <form>
                        Your Name
                        <Input type="text" name="yourname" placeholder="Enter your name"></Input>
                        Apartment Name
                        <Input type="text" name="apartmentname" placeholder="Enter apartment/house name"></Input>
                       Number of Rooms
                        <Input type="select" name="selectroom" id="selectroom">
                           <option>--Select Option--</option>
                            <option>Only 1</option>
                            <option>2 to 4</option>
                            <option>4 to 6</option>
                            <option>6 or more</option>
                        </Input>
                        Address
                        <Input type="text" name="phonenum"  id="search_term" placeholder="Enter apartment/house address "></Input>
                        <Row>
                            
                            <Col md="6">
                            City
                            <Input type="number" name="city"  id="search_term" placeholder="City"></Input>
                            </Col>
                            <Col md="6">
                            Pincode
                        <Input type="number" name="phonenum"  id="search_term" placeholder="Area pincode"></Input>
                            </Col>
                        </Row>
                       
                        Phone Number  
                        <Input type="number" name="phonenum" placeholder="Enter your phone number" step="0.01"></Input>
                      
                      </form>
                      <Button style={{backgroundColor:"#7D7796"}} >Submit</Button>
                      </div>
                    </Col>
                </Row>
                <Footer></Footer>
                <LastFooter></LastFooter>
            </div>
              )
            }
            </Media>
           
        )
    }
}

export default listproperty
