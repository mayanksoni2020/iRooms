import React, { Component } from 'react'
import CompletePro from '../CompleteProfile/completePro';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Home from './switchlinkscomponent/home';
import Visit from './switchlinkscomponent/Visit/visit';
import Complaint from './switchlinkscomponent/complaint/complaint';
import Wallet from './switchlinkscomponent/wallet/wallet';
import WishList from './switchlinkscomponent/Cart-main/cartmain';
export class switchlinks extends Component {
    state={
        home:true,
    }
    // componentDidUpdate(prevProps,prevState)
    // {
    //     console.log(prevProps.linkname);
    //     console.log(prevState);
    // }
    static propTypes={
        pagelinks:PropTypes.object.isRequired,
        auth:PropTypes.object.isRequired
    }
    isCheck(param){
        if(param === "Home")
        return <Home letProps={this.state.user}></Home>;
        else if(param==="Profile")
        return <CompletePro/>
        else if(param==="Wish")
        return <WishList walletProps={this.props.auth.user}></WishList>
        else if(param==="Wallet")
        return <Wallet ></Wallet>
        else if(param==="Change")
        return <Complaint></Complaint>
        else if(param==="Visit")
        return <Visit></Visit>
        return <Home></Home>
}
    render()
    {
       
        return(
               <div>
                   {this.isCheck(this.props.pagelinks.linkname)}
               </div>
           )

    }
} 
const mapStateToProps=(state)=>({
    pagelinks:state.page,
    auth:state.auth
})
export default connect(mapStateToProps,null)(switchlinks)
