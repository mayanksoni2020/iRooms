import React,{Component} from 'react';
import SharedRoom from '../../container/sharedRooms/sharedRooms';
import CompleteHeader from '../CompleteHeader/completeHeader';
import '../SharedRoomPage/SRP.css'
import Media from 'react-media';
import {connect} from 'react-redux';
import SharedRoomMob from '../../container/sharedRooms/sharedRoomMob';
import {getItems,addToCart,filterPrivate,filterFamily,filterShared} from '../../actions/roomAction';
import {Button, UncontrolledDropdown, Col,DropdownToggle, Row,DropdownMenu,ButtonGroup,DropdownItem} from 'reactstrap';
import Footer from '../Footer/footer';
import LastFooter from '../Footer/lastFooter';

import PropTypes from 'prop-types';

class SRP extends Component{
    componentDidMount(){
        this.props.filterFamily();
       
        }
        onDeleteHandler=(id)=>{
            this.props.addToCart(id);
    }
    filterPrivateHandle=()=>{
        this.props.filterPrivate()
    }
    filterSharedHandle=()=>{
        this.props.filterShared()
    }
    filterFamilyHandle=()=>{
        this.props.filterFamily()
    }
    render()
    {
        const {rooms}=this.props.roomState
        return(
            <div>
            <Media query="(max-width:800px)">
                {
                    matches=>
                    matches?(
                        <div className="sharedRoomParent">
                        <CompleteHeader></CompleteHeader>
                        <div className="searchFilterMob">          
        <ButtonGroup size="sm">
  <Button outline color="success" onClick={this.filterPrivateHandle}>Private Rooms</Button>
  <Button onClick={this.filterSharedHandle}>Shared Rooms</Button>
  <Button outline color="info" onClick={this.filterFamilyHandle}>Family Rooms</Button>
</ButtonGroup>
       </div>
        <div className="cardSharedRoomMob">
        {
                            rooms.map((room)=>{
                                return(

                                     <SharedRoomMob
                                imgSrc={room.imageUrl}
                                houseId={room.houseId}
                                houseDistance={room.houseDistance}
                                houseRent={room.houseRent}
                                statusTag={room.statusTag}
                                furnished={room.furnished}
                                area={room.area}
                                bedding={room.bedding}
                                securityDeposit={room.securityDeposit}
                                linkvisit={`/playground/${room._id}`}
                                ></SharedRoomMob>
                                )
                            })
                        }
        </div>
                       <Footer></Footer>
                       <LastFooter></LastFooter>
                    </div>

                    ):(
                        <div className="sharedRoomParent">
                       <CompleteHeader></CompleteHeader>
                        <div className="searchFilter">
                        <Button outline onClick={this.filterSharedHandle} >Shared Rooms</Button>
                            <Button outline onClick={this.filterPrivateHandle}>Private Rooms</Button>
                            <Button outline onClick={this.filterFamilyHandle} >Family Rooms</Button>
                            <UncontrolledDropdown>
                  <DropdownToggle caret color="success">
                 Price 
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="#">&#8377;2000 - &#8377;4000</DropdownItem>
                    <DropdownItem tag="a" href="#">&#8377;4000 - &#8377;6000</DropdownItem>
                    <DropdownItem tag="a" href="#">&#8377;6000 - &#8377;8000</DropdownItem>
                    <DropdownItem tag="a" href="#">&#8377;8000 - &#8377;10000</DropdownItem>
                    <DropdownItem tag="a" href="#">&#8377;10k or above</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                <DropdownToggle caret outline>
                 Gender
                  </DropdownToggle>
                  <DropdownMenu>
                   <DropdownItem>Boys</DropdownItem>
                   <DropdownItem>Girls</DropdownItem>
        
                  </DropdownMenu>
                </UncontrolledDropdown>
                            </div>
                        
                   <div className="wrapCol">
                    <Row style={{margin:"0px"}}>
                        {
                            rooms.map((room)=>{
                                return(
                                    <Col md={{size:4}} style={{padding:"0px",margin:"0px"}}>
                                     <SharedRoom
                                imgSrc={room.imageUrl}
                                houseId={room.houseId}
                                houseDistance={room.houseDistance}
                                houseRent={room.houseRent}
                                statusTag={room.statusTag}
                                furnished={room.furnished}
                                area={room.area}
                                bedding={room.bedding}
                                securityDeposit={room.securityDeposit}
                                linkvisit={`/playground/${room._id}`}
                                ></SharedRoom>
                                </Col>)
                            })
                        }
                        </Row>
                        </div>
                        <Footer></Footer> 
                        <LastFooter></LastFooter>
                    </div>
                     
                       

                    )
                }
            </Media>
            </div>
        
        );
    }
}

SRP.propTypes = {
    getItems:PropTypes.func.isRequired,
    addToCart:PropTypes.func.isRequired,
    roomState:PropTypes.object.isRequired,
    filterPrivate:PropTypes.func.isRequired,
    filterFamily:PropTypes.func.isRequired,
    filterShared:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
    roomState:state.room
})
export default connect(mapStateToProps,{getItems,addToCart,filterPrivate,filterShared,filterFamily})(SRP);