import React, { Component } from 'react'
import CompleteHeader from '../../component/CompleteHeader/completeHeader';
import SinglePage from '../../container/SinglePageprop/singlepageprop';
import Footer from '../../component/Footer/footer';
import {connect } from 'react-redux';
import {getIndividualRoom} from '../../actions/roomAction';
import PropTypes from 'prop-types';
import Lastfooter from '../../component/Footer/lastFooter';
import {Spinner} from 'reactstrap';
import SinglePageMob from '../SinglePageprop/singlepagepropmob';
import Media from 'react-media';
export class multiplepages extends Component {
    componentDidMount(){
        const {match:{params}}=this.props;
       console.log(params.userID);
       this.props.getIndividualRoom(params.userID);
    }
    
    render() {
        console.log(this.props.oneRoom.loading);
        return (
            <div>
                <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
            <div>
                <CompleteHeader></CompleteHeader>
                {this.props.oneRoom.loading?<div style={{width:"100%",height:"100vh",textAlign:"center",paddingTop:"170px"}}>
                 <Spinner type="grow" color="primary" style={{ width: '2rem', height: '2rem' }}/>
         <Spinner type="grow" color="secondary" style={{ width: '2rem', height: '2rem' }}/>
         <Spinner type="grow" color="success" style={{ width: '2rem', height: '2rem' }} />
         <Spinner type="grow" color="danger" style={{ width: '2rem', height: '2rem' }} />
         <Spinner type="grow" color="warning" style={{ width: '2rem', height: '2rem' }} />
         <Spinner type="grow" color="info"  style={{ width: '2rem', height: '2rem' }}/>
         
         <Spinner type="grow" color="dark"  style={{ width: '2rem', height: '2rem' }}/></div>:<div>
         {
             this.props.oneRoom.inrooms.map((room)=>{
                 return(
 
                      <SinglePageMob
                      id={room._id}
                 houseDesc={room.roomDesc}
                 houseId={room.houseId}
                 houseName={room.houseName}
                 houseDistance={room.houseDistance}
                 houseRent={room.houseRent}
                 statusTag={room.statusTag}
                 furnished={room.furnished}
                 area={room.area}
                 colorName={room.color}
                 bedding={room.bedding}
                 securityDeposit={room.securityDeposit}
                 gender={room.gender}
                 ></SinglePageMob>
                 )
             })
          }
         </div>
     }  

            </div>

            ) : (
                <div style={{backgroundColor:"#fafafa"}}>
                <CompleteHeader></CompleteHeader> 
             {this.props.oneRoom.loading?<div style={{width:"100%",height:"100vh",textAlign:"center",paddingTop:"250px"}}>
                 <Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }}/>
         <Spinner type="grow" color="secondary" style={{ width: '3rem', height: '3rem' }}/>
         <Spinner type="grow" color="success" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="danger" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="warning" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="info"  style={{ width: '3rem', height: '3rem' }}/>
         
         <Spinner type="grow" color="dark"  style={{ width: '3rem', height: '3rem' }}/></div>:<div>
         {
             this.props.oneRoom.inrooms.map((room)=>{
                 return(
 
                      <SinglePage
                      id={room._id}
                      labelHouse={room.labelHouse}
                      imageUrl={room.imageUrl}
                 houseDesc={room.roomDesc}
                 houseId={room.houseId}
                 houseName={room.houseName}
                 houseDistance={room.houseDistance}
                 houseRent={room.houseRent}
                 statusTag={room.statusTag}
                 furnished={room.furnished}
                 area={room.area}
                 colorName={room.color}
                 bedding={room.bedding}
                 securityDeposit={room.securityDeposit}
                 gender={room.gender}
                 ></SinglePage>
                 )
             })
          }
         </div>
     }  
         
                <Footer></Footer>
                <Lastfooter></Lastfooter>
             </div>
            )
          }
        </Media>
            </div>
           
        )
    }
}
multiplepages.propTypes={
    getIndividualRoom:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>(
    {
        oneRoom:state.room
    }
)
export default connect(mapStateToProps,{getIndividualRoom})(multiplepages)
