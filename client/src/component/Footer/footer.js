import React,{Component} from 'react';
import './footer.css';
import {NavLink} from 'reactstrap';
import Media from 'react-media';
class Footer extends Component{
    render()
    {
        return(
            <div>
                <Media query="(max-width:800px)">
                    {matches=>matches?(
                        <div className="footerDivmob">
                       
                        <div style={{flexGrow:"3"}}>
                       
                        <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                            <li><h5 style={{color:"#99B927"}}>Company</h5></li>
                            <li><NavLink href="/aboutus" style={{fontSize:"1rem",color:"#6A6A6A"}}>About us</NavLink></li>
                             <li><NavLink href="/contactus" style={{fontSize:"1rem",color:"#6A6A6A"}}>Contact us</NavLink></li>
                             <li><NavLink href="/work" style={{fontSize:"1rem",color:"#6A6A6A"}}>Work with us</NavLink></li>
                             <li>Press</li>
                             <li>Blog</li>
                             <li>Developers</li> 
                            <br></br>
                            <li><h5 style={{color:"#99B927"}}>More Information</h5></li>
                            <li>FAQ</li>
                             <li>Owner policies</li>
                             <li>Tenant policies</li>
                             <li>Privacy policies</li>  
                        </ul>
            
                        </div>
                        <div style={{flexGrow:"3"}}>
                        <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                        <li><h5 style={{color:"#99B927"}}>Partner with us</h5></li>
                            <li>For house owners</li>
                            <li>For Large corporations</li>
                            <br></br>
                            <br></br>
                            <li><h5 style={{color:"#99B927"}}>We are social</h5></li>
                    <li id="fb" className="lastglyph"><i class="fab fa-facebook-square"></i></li>
                    <li id="tw" className="lastglyph"><i class="fab fa-twitter"></i></li>
                    <li id="insta" className="lastglyph"><i class="fab fa-instagram"></i></li>
                    <li id="in" className="lastglyph"><i class="fab fa-linkedin"></i></li>
                    <li id="sn" className="lastglyph"><i class="fab fa-snapchat-square"></i></li>
                    <li id="wt" className="lastglyph"><i class="fab fa-whatsapp"></i></li>
                        </ul>
                        </div>
                        
                        </div>


                    ):(
                         <div className="footerDiv">
                         <div style={{flexGrow:"3"}}>
                             <h4 style={{color:"#99B927",textDecoration:"underline"}} >iRooms</h4>
                             iRooms is India's emerging “<span style={{color:"#99B927"}}>Home Rental Service Provider</span>” focussed to provide a higher quality of living with the help of our designed platform.<br></br>
                             Now with iRooms it becomes unchallenging to find out a living space across Indian cities for anyone just in three simple steps - Search, Visit, Move-In. We also provide home maintenance services, so that an individual can live in healthy and friendly environment.<br></br>
                             Experience a new wave of living with iRooms, no matter what is your budget, we have something for you. Let us guide you a home.
                         </div>
                         <div style={{flexGrow:"3"}}>
                        
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                             <li><h5 style={{color:"#99B927"}}>Company</h5></li>
                             <li><NavLink href="/aboutus" style={{fontSize:"1rem",color:"#6A6A6A"}}>About us</NavLink></li>
                             <li><NavLink href="/contactus" style={{fontSize:"1rem",color:"#6A6A6A"}}>Contact us</NavLink></li>
                             <li><NavLink href="/work" style={{fontSize:"1rem",color:"#6A6A6A"}}>Work with us</NavLink></li>
                             <li>Press</li>
                             <li>Blog</li>
                             <li>Developers</li>   
                         </ul>
             
                         </div>
                         <div style={{flexGrow:"3"}}>
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                         <li><h5 style={{color:"#99B927"}}>Partner with us</h5></li>
                             <li>For house owners</li>
                             <li>For Large coperations</li>
                         </ul>
             
                         </div>
                         <div style={{flexGrow:"3"}}>
                         <ul style={{listStyleType:"none",padding:"0px",margin:"0px"}}>
                         <li><h5 style={{color:"#99B927"}}>More Information</h5></li>
                             <li>FAQ</li>
                             <li>Owner policies</li>
                             <li>Tenant policies</li>
                             <li>Privacy policies</li>
                         </ul>
                         </div>
                         </div>


                    )}
                </Media>
            </div>
       
            );
    }
}
export default Footer;