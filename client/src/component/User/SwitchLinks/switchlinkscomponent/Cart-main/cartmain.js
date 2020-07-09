import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCartItems} from '../../../../../actions/authAction';
import Wtemplate from '../../../../Wishlist-template/Wishlist-template';
import {Row,Col} from 'reactstrap';
const axios=require('axios');
export class cartmain extends Component {
   
    componentDidMount()
    {
        this.props.getCartItems();
    }
    handlePayment=()=>{
        console.log("hitted")
        const data={
            purpose:"Testing purpose",
            amount:'10',
            buyer_name:this.props.walletProps.name,
            email:this.props.walletProps.email,
            phone:'8340683104',
            user_id:this.props.walletProps._id,
            redirect_url:'http://localhost:3000/dummy',
            webhook_url:'/webhook/',
        };
        axios.post('/api/payment',data)
        .then(res=>{
            console.log('resp',res.data)
            window.location.href=res.data;
        }).catch((e)=>console.log(e.response.data))
      }
    render() {
        console.log(this.props.user.cart);
        return (
            <div>
                             <div>
                    <Row style={{margin:"0px"}}>
                        {
                            this.props.user.cartRooms.map((room)=>{
                                return(
                                    <Col md={{size:4}} style={{padding:"0px",margin:"15px"}}>
                                        
                                        <Wtemplate  houseId={room.houseId}
                                imgSrc={room.imageUrl}
                                houseName={room.houseName}
                                bedding={room.bedding}
                                furnished={room.furnished}
                                labelHouse={room.labelHouse}
                                houseDistance={room.houseDistance}
                                statusTag={room.statusTag}
                                makepay={this.handlePayment}
                                
            ></Wtemplate>
                                </Col>)
                            })
                        }
                        </Row>
                        </div>
            </div>
        )
    }
}

cartmain.propTypes = {
    
    user:PropTypes.object.isRequired,
    getCartItems:PropTypes.func.isRequired
  
}
const mapStateToProps=(state)=>({
    user:state.user
})
export default connect(mapStateToProps,{getCartItems})(cartmain);
