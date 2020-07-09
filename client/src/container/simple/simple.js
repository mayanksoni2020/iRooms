import React from 'react';
import {Row,Col} from 'reactstrap';
const simple=(props)=>{
   return(
       <Row>
           <Col md="3" style={{backgroundColor:"yellow",margin:"5px"}}>1</Col>
           <Col md="3" style={{backgroundColor:"red",margin:"5px"}}>1</Col>
           <Col md="3" style={{backgroundColor:"red",margin:"5px"}}>1</Col>
           <Col md="3" style={{backgroundColor:"red",margin:"5px"}}>1</Col>
       </Row>
   )
}
export default simple;