import React, { Component } from 'react'
import '../menubar.css';
import {Col,NavLink} from 'reactstrap';
import CompletePro from '../../User/Formuserdetails/formuserdetails';
export class menubar extends Component {
    
    render() {
        return (
            <div>
                <div className="topnav">
                   <ul><li>
                   <i class="fas fa-user-astronaut"></i>
                       </li></ul> 
                    </div>
                    <div style={{padding:"15px",display:"flex",flexDirection:"row"}}>
                        <div style={{flexGrow:"1"}}> Dashboard</div>
                        <div style={{flexGrow:"9"}}><marquee>Hello there, iRooms welcome's you onboard</marquee></div>
                       
                    </div>
                  
                <div className="middlenav">
                    <div className="sidenav">
                        <ul>
                            <li ><i class="fas fa-user"></i> <NavLink href="/" style={{display:"inline",color:"#99DCE3"}}> Home</NavLink></li>
                            <li><i class="far fa-id-badge"></i> <NavLink href="/myprofile" active style={{display:"inline",color:"#99DCE3"}}>My Profile</NavLink>  </li>
                            <li><i class="far fa-id-badge"></i> <NavLink href="/cp" style={{display:"inline",color:"#99DCE3"}}>Complete profile</NavLink></li>
                            <li><i class="far fa-calendar-alt"></i> <NavLink href="/visits" style={{display:"inline",color:"#99DCE3"}}>Visits</NavLink></li>
                            <li><i class="fas fa-bookmark"></i> <NavLink href="/wishlist" style={{display:"inline",color:"#99DCE3"}}> Wish List</NavLink></li>
                            <li><i class="fas fa-wallet"></i> <NavLink href="/wallet" style={{display:"inline",color:"#99DCE3"}}> Wallet</NavLink></li>
                            <li><i class="fas fa-keyboard"></i><NavLink href="/cpassword" style={{display:"inline",color:"#99DCE3"}}>Change Password</NavLink></li>
                        
        
                        </ul>
                    </div>
                    <div className="mainnav">
                        <div>
                            <Col md="4" style={{maxWidth:"100%"}}>
                           <CompletePro></CompletePro>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default menubar;
