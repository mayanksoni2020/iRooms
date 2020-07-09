import React, { Component } from 'react'
import './singlepagepromob.css';
import CompleteHeader from '../../component/CompleteHeader/completeHeader';
import {Redirect} from 'react-router-dom';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Badge,Button,Form,Input,FormGroup,
    Collapse,InputGroup,InputGroupAddon
  } from 'reactstrap';
  import Footer from '../../component/Footer/footer';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  import LastFooter from '../../component/Footer/lastFooter';
const items = [
    {
      src: 'https://placeimg.com/350/350/any',
  
    },
    {
      src: 'https://placeimg.com/350/350/tech',
    },
    {
      src: 'https://placeimg.com/350/350/arch',
      
    }
  ];
export class singlepagepropmob extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0,
        isActive:true,
      collapse:false };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
      static propTypes={
        auth:PropTypes.object.isRequired
      }
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
      changeStateHandle=()=>{
        this.setState({isActive:!this.state.isActive})
      }
       toggleSchedule=()=> {
        this.setState({collapse:!this.state.collapse});
      }
      sendDetailHandler=()=>{
  if(this.props.auth.isAuthentiacated)
  {
    console.log("hiitt");}
    else{
     return  <Redirect to ="/login"></Redirect>
    }
      }
      render() {
        const { activeIndex } = this.state;
      
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
            <div>
               
                <div style={{margin:"5px"}}>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          </div>
          <div className="carouselBottom">
            <div className="rentdetail">
              <div className="rentdetail1">
                <small style={{color:"grey",fontSize:"12px"}}>Rent From</small> <br></br>
              <span> <h6 style={{display:"inline"}}> &#8377;{this.props.houseRent}</h6><small style={{fontSize:"8px",color:"grey"}}>/Room</small></span> 
              </div>
              <div className="rentdetail2"><small style={{color:"grey",fontSize:"12px"}}>Security Deposit</small> <br></br>
              <span> <h6>Just {this.props.securityDeposit} Months</h6></span> </div>
              <div className="rentdetail3" style={{border:"none"}}> <small style={{color:"grey",fontSize:"12px"}}>Room Status</small><br></br>
            <h6><Badge color="danger" pill style={{padding:"5px 10px"}}>{this.props.statusTag}</Badge></h6>
              </div>
            </div>
            <hr></hr>

          {/* Below part made by Mayank */}
            <div>
            <h6 style={{color:"#535353",margin:"0px" }}>House Id:-{this.props.houseId}</h6>
              <h5 style={{display:"inline-block"}}>Shanti Devi Complex</h5><h5 style={{display:"inline-block", marginLeft:"5px"}}><Badge color="warning"><i class="fas fa-check-circle"></i> iRooms Verified</Badge></h5>
              <h6 style={{color:"#17141E"}}>{this.props.houseDesc},Jalandhar</h6>
               {/* <h6 style={{color:"#17141E"}}>{this.props.houseId}</h6>  */}
              <small style={{color:"grey",fontSize:"14px"}}>Only for {this.props.gender} | {this.props.bedding} Bed Available | {this.props.furnished} Furnished Room | Room Area {this.props.area} sq. ft.</small>
            </div>
          {/* Mayank part ended */}

          </div>

<div className="roomAmenities">
              <div className="amenities">
                <h4>Room Amenities</h4>
              </div>
              <br></br>
              <div className="amenitiesDetail">
                <div className="amenitiesGlyphs">
                <i class="fas fa-couch" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"10px"}}>Sofa</small>
                </div>
                <div className="amenitiesGlyphs">
                  <i class="fas fa-tv" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"10px"}}>Telivision</small>
                </div>
                <div className="amenitiesGlyphs">
                <i class="fas fa-wifi" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"10px"}}>Wifi</small>
                </div>
                <div className="amenitiesGlyphs">
                  <i class="fas fa-car-battery" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"10px"}}>Inverter</small>
                </div>               
              </div>
          </div>
          <div className="rentDetails">
            <div className="details">
              <h4 style={{marginBottom:"15px"}}>Rent Details</h4>
            </div>
            
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h6>Monthly Rent</h6>
              <small style={{color:"grey",fontSize:"14px"}}>This is a amount that have to be<br></br> paid by the tenant every month</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;{this.props.houseRent}</h6>
              </div>
            </div>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h6>Security Deposit</h6>
              <small style={{color:"grey",fontSize:"14px"}}>Fully refundable if no damage<br></br> found at the time of move-out</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
              <h6>{this.props.securityDeposit} Months</h6>
              </div>
            </div>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h6>Service Charge</h6>
              <small style={{color:"grey",fontSize:"14px"}}>It is a one-time iRooms service<br></br> charge which tenants have to pay at move-in</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;199</h6>
              </div>
            </div>
            <div className="monthlyRent1">
              <div style={{display:"inline-block"}}>
              <h6>Room Maintenance Charge</h6>
              <small style={{color:"grey",fontSize:"14px"}}>It includes monthly room maintenace<br></br> or fixes whenever applicable</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;199</h6>
              </div>
            </div>
          </div>
          <div className="houseTerms">
            <div className="terms">
              <h4>House Terms</h4>
            </div>
            <div>
              <p style={{fontSize:"14px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                   specimen book.</p>
            </div>
          </div>
          <div className="partLayout222" style={{margin:"10px"}}>
            <div className="partLayout2nav">
              <div className="nav1inside"><Button color="success" style={{border:"none",color:"white",backgroundColor:"inherit",borderRadius:"0px"}} id="buttonnav" onClick={this.changeStateHandle}> <b>Visit the house</b></Button></div>
              <div className="nav2inside"><Button color="success" style={{border:"none",color:"white",backgroundColor:"inherit",borderRadius:"0px"}} id="buttonnav" onClick={this.changeStateHandle}><b>Book Now</b></Button></div>
    
            </div>
            <br></br>
            {this.state.isActive?<div className="guidediv">
            
            <i class="fas fa-map-marked-alt"></i><br></br>
           <h4> <b>FREE Guided tour</b></h4> 
            <small style={{color:"grey"}}>With our executive</small><br></br>
            <Button color="success" outline style={{padding:"5px 35px",margin:"15px 0px"}}onClick={this.toggleSchedule}><b>Schedule Visit</b></Button>
            
            <Collapse isOpen={this.state.collapse}>
            
         <div style={{margin:"15px"}} className="scheduleinside" >
           <small style={{color:"grey"}}>SMS/Email will be sent with exact<br></br> directions to the house.</small>
            <div style={{margin:"15px",border:"0.5px solid grey",padding:"15px"}}>
            <Form>
            <InputGroup>
        <InputGroupAddon addonType="prepend">+91</InputGroupAddon> 
        <Input placeholder="enter your phone number" />
      </InputGroup>
      <br></br>
        <FormGroup>
          <Input type="email" name="email" id="examplePassword" placeholder="Enter your email" />
        </FormGroup>
        </Form>
        </div>
        <Button color="dark" outline style={{backgroundColor:"black",color:"white"}}>Proceed For Free Visit </Button>
        <br></br><small style={{color:"grey"}}>Please be on time it will help us to serve you better</small>
        </div>
        </Collapse>
            </div>:
          <div className="guidediv">
            
          <i class="fas fa-coins"></i><br></br>
         <h4> <b>Pay small token & book</b></h4> 
          <small style={{color:"grey"}}>And the remaining before moving in</small>
         
           <Button color="success" outline  style={{padding:"10px 45px",margin:"15px 0px",fontWeight:"800"}} onClick={this.sendDetailHandler}>BOOKS( BED/ROOM/HOUSE )</Button>
          </div>
          }
         
          
          </div>
          <Footer></Footer>
          <LastFooter></LastFooter>
        </div>
        
        );
      }
    }

  const mapStateToProps=(state)=>({
    auth:state.auth
  });
export default connect(mapStateToProps)(singlepagepropmob);
