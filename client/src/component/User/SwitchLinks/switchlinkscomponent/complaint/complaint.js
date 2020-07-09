import React, { Component } from 'react'
import{Row,Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './complaint.css';
export class complaint extends Component {
    state={
        complainType:" ",
        insideSpecific:false
    }
    changeHandler=(e)=>{
         console.log(e.target.value); 
         this.setState({complainType:e.target.value});  
    }

    changeHandlerSpecific=(e)=>{
        this.setState({insideSpecific:true})
    }
    isOpenSelected(complainTypes)
    {
        if(complainTypes==="Electric")
        return( <div>
                 <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandlerSpecific}>
            <option >--Select Option--</option>
            <option>Electric Shock</option>
            <option>Energy Meter Problem</option>
            <option>Fan Problem </option>
            <option>Geyser</option>
            <option>MCB Box</option>
            <option>Short Circuit</option>
            <option>Switch Board/Wiring</option>
            <option>Tube Light Problem</option>
            <option>No Power Supply</option>
          </Input>
          {this.state.insideSpecific?<div style={{margin:"15px 0px"}}> <Input type="textarea" name="text" id="exampleText" style={{height:"150px"}} placeholder="Tell us in brief about the problem" /><Button color="success" block style={{margin:"25px 0px"}}>Submit</Button></div>:<p>unselected</p>}
             </div>);
        else if(complainTypes==="Plumbing")
        return (
            <div>
                 <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandlerSpecific}>
            <option >--Select Option--</option>
            <option>Aquaguard</option>
            <option>Desert cooler</option>
            <option>Flush Problem</option>
            <option>Shower</option>
            <option>Tap problem</option>
            <option>Washbasin</option>
            <option>Water Tank</option>
          </Input>
          {this.state.insideSpecific?<div style={{margin:"15px 0px"}}> <Input type="textarea" name="text" id="exampleText" style={{height:"150px"}} placeholder="Tell us in brief about the problem" /><Button color="success" block style={{margin:"25px 0px"}}>Submit</Button></div>:<p>unselected</p>}
             </div>
        );
        else if(complainTypes==="Carpentary")
        return (<div>
            <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandlerSpecific}>
       <option >--Select Option--</option>
       <option>Almirah/Rack Repair</option>
       <option>Carpentary work in room</option>
       <option>Door Problem</option>
       <option>Sofa</option>
       <option>Bed</option>
     </Input>
     {this.state.insideSpecific?<div style={{margin:"15px 0px"}}> <Input type="textarea" name="text" id="exampleText" style={{height:"150px"}} placeholder="Tell us in brief about the problem" /><Button color="success" block style={{margin:"25px 0px"}}>Submit</Button></div>:<p>unselected</p>}
        </div>);
        else if(complainTypes==="AirConditioner")
        return(
            <div>
                 <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandlerSpecific}>
            <option >--Select Option--</option>
            <option>Split A.C not working</option>
            <option>A.C inverter problem</option>
          </Input>
          {this.state.insideSpecific?<div style={{margin:"15px 0px"}}> <Input type="textarea" name="text" id="exampleText" style={{height:"150px"}} placeholder="Tell us in brief about the problem" /><Button color="success" block style={{margin:"25px 0px"}}>Submit</Button></div>:<p>unselected</p>}
             </div>
        )
        else if(complainTypes==="Other")
        return (<div><Input type="textarea" name="text" id="exampleText" style={{height:"150px"}} placeholder="Please tell us in details about your problem" /> <Button color="success" block style={{margin:"25px 0px"}}>Submit</Button> </div>)
        else
        return <p>Please select any one</p>
    }
    render() {
       
        return (
            <div >
                <Row className="complaintbox">
                    <Col md="6">
                        <div style={{textAlign:"center"}}>
                   <img src={require('../../../../../image/cc.jpg')} alt="complaint" style={{width:"400px",height:"350px"}}></img>
                    <h3 >Having a word for us,Let us Know </h3>
                    </div>
                    </Col>
                    <Col md="4" style={{boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",padding:"25px 25px"}}>
                        <div >
                       <Input type="select" name="select" id="exampleSelect" onChange={this.changeHandler}>
            <option >--Select Option--</option>
            <option>Electric</option>
            <option>Plumbing</option>
            <option>Carpentary</option>
            <option>AirConditioner</option>
            <option>Other</option>
          </Input>
            
            <div style={{margin:"15px 0px"}}>
            {this.isOpenSelected(this.state.complainType)}
            </div>
            </div>
            </Col>
                </Row>
            </div>
        )
    }
}

export default complaint
