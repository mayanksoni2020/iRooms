import React from 'react';
import '../pop.css';
import {Card,CardImg,CardTitle,CardSubtitle,CardBody,Button} from 'reactstrap';
const singlePopular=(props)=>{
    return(
        <div className="insideSlide" id="slide11">
   <Card>
                  <CardImg top width="100%" src={props.imageUrl} style={{width:"318px",height:"180px"}} alt="Card image cap" className="image" />
                  <CardBody>
                    <CardTitle><h5>{props.houseName}</h5></CardTitle>
                    <CardSubtitle>{props.statusTag}</CardSubtitle>
                    <br></br>
                    <Button color="info" block>Explore more</Button>
                  </CardBody>
                </Card>
        </div>
    );
}
export default singlePopular;