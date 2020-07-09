import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Badge,Button,Form,Input,FormGroup,
  Collapse,InputGroup,InputGroupAddon
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './singlepageprop.css';
import Axios from 'axios';
const items = [
  {
    src: 'https://placeimg.com/650/350/any',

  },
  {
    src: 'https://placeimg.com/650/350/tech',
  },
  {
    src: 'https://placeimg.com/650/350/arch',
    
  }
];

export class singlepageprop extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
    isActive:true,
  collapse:false ,
moveon:false};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  static propTypes={
    auth:PropTypes.object.isRequired,
  
  }
  sendDetailPcHandler=()=>{
    if(!this.props.auth.isAuthenticated)
    {
    alert("please login first");
  }else{
    const userId=this.props.auth.user._id;
    console.log(userId);
    const data={
     houseId:this.props.houseId,
     imageUrl:this.props.imageUrl,
     statusTag:this.props.statusTag,
     houseName:this.props.houseName,
     houseDistance:this.props.houseDistance,
     furnished:this.props.furnished,
     area:this.props.area,
     bedding:this.props.bedding,
     labelHouse:this.props.labelHouse,
 
    }
    const newData=JSON.stringify(data);
    console.log(newData);
   axios.post(`/api/auth/${userId}/cart`,data).then((res)=>{
     console.log(res.data)
   }).catch((e)=>{
     console.log(e);
   })
  
  }
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
  render() {
    
    const { activeIndex } = this.state;
    if(this.state.moveon ===true){
    return  <Redirect to="/login"></Redirect>
    }
  
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
      <div style={{backgroundColor:"#92B6B0",margin:"95px"
      }}>
      
        <div className="headernav">
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current" style={{listStyleType:"None",margin:"0px",padding:"0px"}}>
    <li><a href="#section-1">Room Details</a></li>
    <li><a href="#section-2">Room Amenities</a></li>
    <li><a href="#section-3">Rent Details</a></li>
    <li><a href="#section-4">House Terms</a></li>
    <li  className="skip" style={{float:"right",padding:"0px",marginRight:"10px"}}><a href="#" style={{color:"white"}}><b>Refer & Earn</b></a></li>
  </Scrollspy>
        
        </div>
        <div className="mainLayout">
          <div className="partLayout1">
        <div className="partLayout1Inside">
          <div className="carouselSlides">
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
          <section id="section-1">
          <div className="carouselBottom">
            <div className="rentdetail">
              <div className="rentdetail1">
                <small style={{color:"grey",fontSize:"16px"}}>Rent From</small> <br></br>
              <span> <h4 style={{display:"inline"}}> &#8377;{this.props.houseRent}</h4><small style={{fontSize:"12px",color:"grey"}}>/Room</small></span> 
              </div>
              <div className="rentdetail2"><small style={{color:"grey",fontSize:"16px"}}>Security Deposit</small> <br></br>
              <span> <h4>Just {this.props.securityDeposit} Months</h4></span> </div>
              <div className="rentdetail3" style={{border:"none"}}> <small style={{color:"grey",fontSize:"16px"}}>Room Status</small><br></br>
             <h5><Badge color="danger" pill style={{padding:"10px 25px"}}>{this.props.statusTag}</Badge></h5>
              </div>
            </div>
            <hr></hr>

          {/* Below part made by Mayank */}
            <div>
            <h6 style={{color:"#535353",margin:"0px" }}>House Id:-{this.props.houseId}</h6>
              <h2 style={{display:"inline-block"}}>{this.props.houseName}</h2><h5 style={{display:"inline-block", marginLeft:"10px"}}><Badge color="warning"><i class="fas fa-check-circle"></i> iRooms Verified</Badge></h5>
              <h5 style={{color:"#17141E"}}>{this.props.houseDesc},</h5>
              <h5 style={{color:"#17141E"}}>Jalandar</h5><br></br>
              <small style={{color:"grey",fontSize:"16px"}}>Only for {this.props.gender} | {this.props.bedding} Bed Available | {this.props.furnished} Furnished Room | Room Area {this.props.area} sq. ft.</small>
            </div>
          {/* Mayank part ended */}

          </div>
          </section>

          {/* Mayank part started */}
          <section id="section-2">
          <div className="roomAmenities">
              <div className="amenities">
                <h3>Room Amenities</h3>
              </div>
              <br></br>
              <div className="amenitiesDetail">
                <div className="amenitiesGlyphs">
                <i class="fas fa-couch" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"16px"}}>Sofa</small>
                </div>
                <div className="amenitiesGlyphs">
                  <i class="fas fa-tv" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"16px"}}>Telivision</small>
                </div>
                <div className="amenitiesGlyphs">
                <i class="fas fa-wifi" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"16px"}}>Wifi</small>
                </div>
                <div className="amenitiesGlyphs">
                  <i class="fas fa-car-battery" style={{display:"block"}}></i>
                  <small style={{color:"grey",fontSize:"16px"}}>Inverter</small>
                </div>               
              </div>
          </div>
          </section>

          <section id="section-3">
          <div className="rentDetails">
            <div className="details">
              <h3>Rent Details</h3>
            </div>
            <br></br>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h5>Monthly Rent</h5>
              <small style={{color:"grey",fontSize:"16px"}}>This is a amount that have to be paid by the tenant every month</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;{this.props.houseRent}</h6>
              </div>
            </div>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h5>Security Deposit</h5>
              <small style={{color:"grey",fontSize:"16px"}}>Fully refundable if no damage found at the time of move-out</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>Only {this.props.securityDeposit} Months Rent</h6>
              </div>
            </div>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h5>Service Charge</h5>
              <small style={{color:"grey",fontSize:"16px"}}>It is a one-time iRooms service charge which tenants have to pay at move-in</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;199</h6>
              </div>
            </div>
            <div className="monthlyRent">
              <div style={{display:"inline-block"}}>
              <h5>Room Maintenance Charge</h5>
              <small style={{color:"grey",fontSize:"16px"}}>It includes monthly room maintenace or fixes whenever applicable</small>
              </div>
              <div style={{display:"inline-block",float:"right",color:"#D62226"}}>
                <h6>&#8377;199</h6>
              </div>
            </div>
          </div>
          </section>

          <section id="section-4">
          <div className="houseTerms">
            <div className="terms">
              <h3>House Terms</h3>
            </div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                   specimen book.</p>
            </div>
          </div>
          </section>

          {/* Mayank part ended */}

        </div>

          </div>
          <div className="partLayout2">
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
            {/* <hr style={{border:"1"}}></hr>
            <small style={{color:"black",display:"block"}}>Or contact us at +91-8640XXXXX</small> */}
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
         
           <Button color="success" outline  style={{padding:"10px 45px",margin:"15px 0px",fontWeight:"800"}} onClick={this.sendDetailPcHandler}>BOOK( BED/ROOM/HOUSE )</Button>
          </div>
          }
         
          
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  auth:state.auth
})
export default connect(mapStateToProps)(singlepageprop);
