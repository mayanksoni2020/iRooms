import React,{Component} from 'react';
import Media from 'react-media'
import './pop.css';
import SinglePopular from './singlePopular/singlepopular';
import {getItems} from '../../actions/roomAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {  Button,Card, CardImg,CardBody,
    CardTitle, CardSubtitle,  } from 'reactstrap';
class Popular extends Component{

  static propTypes={
    room:PropTypes.func.isRequired
  }
  state={
    roomsDetaill:[]
  }
  componentDidMount()
  {
   
  this.props.getItems();
  console.log(this.props.room.loading);
    
  }
  
    render()
    {
      let mapDetailsRoom=null;
      if(this.state.roomsDetaill)
      {
      mapDetailsRoom=this.state.roomsDetaill.filter(function(rooms){
       return rooms.statusTag==="occupied";
     }) 
    }
    if(!this.props.room.loading)
    {
    console.log(this.props.room.rooms);}
    
        return(
          <div>
        <Media query="(max-width:800px)">
          {matches=>
            matches ?(
              <div className="parentRoomDivm">
              <div className="popRoomsm">
                      <div className="popRoomsHeadm">
                          <h4>Popular Rooms Based On Tenant Rating</h4>
                          </div>
                         
                          <div className="popRoomsSliderm">
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />

                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br>
                          <Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
      
                              </div>
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />
                        
                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br> <Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
      
                              </div>
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />
                        
                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br> <Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
      
                              </div>
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />
                      
                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br><Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
                              </div>
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />
                        
                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br><Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
                              </div>
                              <div className="insideSlidem" id="slide11">
                              <Card>
                        <CardImg top width="100%" src={require("../../image/shared.jpg")} style={{width:"250px",height:"180px"}} alt="Card image cap" className="image" />
                        
                        <CardBody>
                          <CardTitle><h5>Shared Rooms</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <br></br><Button color="info" block>Explore more</Button>
                        </CardBody>
                      </Card>
                              </div>
                          </div>
                          
              </div>
              </div>





            ):(
<div className="parentRoomDiv">
        <div className="popRooms">
                <div className="popRoomsHead">
                    <h3>{this.props.name}</h3>
                    </div>
                   
                    <div className="popRoomsSlider">
                    {mapDetailsRoom.map((rooms)=>{
                      return <SinglePopular houseName={rooms.houseName}
                      statusTag={rooms.statusTag}
                      imageUrl={rooms.imageUrl}></SinglePopular>
                    })}
                    </div>
                   
        </div>
        </div>

            )}
        </Media>
        </div>
        
            );
    }
}
const mapStateToProps=(state)=>({
  room:state.room
})
export default connect(mapStateToProps,{getItems})(Popular);