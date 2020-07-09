import React, { Component } from 'react'
import CompleteHeader from '../../CompleteHeader/completeHeader';
import './menubar.css';
import {Col,NavLink,Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Spinner,
    NavItem    
} from 'reactstrap';
import {connect} from 'react-redux';
import {setlinkHome,setlinkProfile,setlinkComplete,setlinkCp,setlinkVisit,setlinkWish,setlinkWallet} from '../../../actions/pageAction';
import SwitchLink from '../SwitchLinks/switchlinks';
import PropTypes from 'prop-types';
import Footer from '../../Footer/footer';
import LastFooter from '../../Footer/lastFooter';
import Media from 'react-media';
export class menubar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    static propTypes={
        setlinkHome:PropTypes.func.isRequired,
        setlinkProfile:PropTypes.func.isRequired,
        setlinkComplete:PropTypes.func.isRequired,
        setlinkWish:PropTypes.func.isRequired,
        setlinkWallet:PropTypes.func.isRequired,
        setlinkCp:PropTypes.func.isRequired,
        setlinkVisit:PropTypes.func.isRequired,
        pagelink:PropTypes.object.isRequired

    }
    setlinkHOME=()=>{
        this.props.setlinkHome("Home")
    }
    setlinkPROFILE=()=>{
        this.props.setlinkProfile("Profile")
    }
    setlinkCOMP=()=>{
        this.props.setlinkComplete("Complete")
    }
    setlinkCP=()=>{
        this.props.setlinkCp("Change")
    }
    setlinkVISIT=()=>{
        this.props.setlinkVisit("Visit")
    }
    setlinkWALLET=()=>{
        this.props.setlinkWallet("Wallet")
    }
    setlinkWISH=()=>{
        this.props.setlinkWish("Wish")
    }
    render() {
      
        return (
            <div>
            <Media query="(max-width: 800px)">
              {matches =>
                matches ? (
                    <div>
                 <div style={{color:"white"}} className="menubarPhone">
                     <Navbar  light expand="md"> 
          <NavbarBrand href="/">Profile</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink onClick={this.setlinkHOME} style={{display:"inline",cursor:"pointer",paddingBottom:"15px"}}> Home</NavLink>
              </NavItem>
              <NavItem>
              <NavLink onClick={this.setlinkPROFILE} style={{display:"inline",cursor:"pointer" ,paddingBottom:"15px"}}> My Profile</NavLink>
              </NavItem>
            <NavItem>
            <NavLink onClick={this.setlinkVISIT} style={{display:"inline",cursor:"pointer" ,paddingBottom:"15px"}}> Visits</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={this.setlinkWISH} style={{display:"inline",cursor:"pointer" ,paddingBottom:"15px"}}> Wish List</NavLink> 
            </NavItem>
            <NavItem>
            <NavLink onClick={this.setlinkCP} style={{display:"inline",cursor:"pointer" ,paddingBottom:"15px"}}> Complaint</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={this.setlinkCP} style={{display:"inline",cursor:"pointer" ,paddingBottom:"15px"}}> Blogs</NavLink>
            </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
        </div>
        <div>
                            <Col md="4" style={{maxWidth:"100%"}}>
                            <SwitchLink ></SwitchLink>
                            </Col>
                        </div>
                 </div>
                ) : (
                //  for desktop
             <div>
                 {this.props.auth.isLoading?<div>
                    <Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }}/>
         <Spinner type="grow" color="secondary" style={{ width: '3rem', height: '3rem' }}/>
         <Spinner type="grow" color="success" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="danger" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="warning" style={{ width: '3rem', height: '3rem' }} />
         <Spinner type="grow" color="info"  style={{ width: '3rem', height: '3rem' }}/>
         
         <Spinner type="grow" color="dark"  style={{ width: '3rem', height: '3rem' }}/>
                 </div>:<div>

 
                    <CompleteHeader></CompleteHeader>
                    <div style={{padding:"15px",display:"flex",flexDirection:"row"}}>
                        <div style={{flexGrow:"1"}}> Dashboard</div>
                        <div style={{flexGrow:"9"}}><marquee>Hello there, iRooms welcome's you onboard</marquee></div>
                       
                    </div>
                  
                <div className="middlenav">
                    <div className="sidenav">
                        <ul>
                            <li ><i class="fas fa-user"></i> <NavLink onClick={this.setlinkHOME} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Home</NavLink></li>
                            <li><i class="far fa-id-badge"></i><NavLink onClick={this.setlinkPROFILE} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> My Profile</NavLink>  </li>
                            
                            <li><i class="far fa-calendar-alt"></i><NavLink onClick={this.setlinkVISIT} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Visits</NavLink></li>
                            <li><i class="fas fa-bookmark"></i> <NavLink onClick={this.setlinkWISH} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Wish List</NavLink></li>
                            <li><i class="fas fa-wallet"></i> <NavLink onClick={this.setlinkWALLET} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Wallet</NavLink></li>
                            <li><i class="fas fa-fist-raised"></i><NavLink onClick={this.setlinkCP} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Complaint</NavLink></li>
                            <li><i class="fas fa-edit"></i><NavLink onClick={this.setlinkCP} style={{display:"inline",color:"#99DCE3",cursor:"pointer"}}> Blogs</NavLink></li>
                            
        
                        </ul>
                    </div>
                    <div className="mainnav">
                        <div>
                            <Col md="4" style={{maxWidth:"100%"}}>
                            <SwitchLink ></SwitchLink>
                            </Col>
                        </div>
                    </div>
                </div><br></br><br></br>
                <Footer/>
                <LastFooter/>
                 </div>}
                    
            </div>

                )
              }
            </Media>
          </div>
            
        )
    }
}
const mapStateToProps=(state)=>({
    pagelink:state.page,
    auth:state.auth
})

export default connect(mapStateToProps,{setlinkHome,setlinkProfile,setlinkComplete,setlinkCp,setlinkVisit,setlinkWish,setlinkWallet})(menubar);
