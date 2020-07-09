import React, { Component } from 'react'
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
export class wallet extends Component {
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
        
        return (
            <div>
                <Card>
        <CardImg top width="100%" src="https://placeimg.com/318/180/tech" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="success" onClick={this.handlePayment}>Payment</Button>
        </CardBody>
      </Card>
            </div>
        )
    }
}

export default wallet
