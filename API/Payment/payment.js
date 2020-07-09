const express=require('express');
const router=express.Router();
const config=require('config');
const Insta = require('instamojo-nodejs');
const apikey=config.get('privateapikey');
const authkey=config.get('privateauthkey');
const url=require('url');
router.post('/',(req,res)=>{
    Insta.setKeys('test_72bf7483398ea72058bdd90802e','test_ea65350b345ab5081ee4d2dfebe');
    Insta.isSandboxMode(true);
    const data=new Insta.PaymentData();
    data.purpose=req.body.purpose;
    data.amount=req.body.amount;
    data.buyer_name=req.body.buyer_name;
    data.redirect_url=req.body.redirect_url;
    data.email=req.body.email;
    data.phone=req.body.phone;
    data.send_email=false;
    data.webhook='http://www.example.com/webhook/';
    data.send_sms=false;
    data.allow_repeated_payments=false;
    Insta.createPayment(data, function(error, response) {
        if (error) {
          // some error
          console.log(error);
        } else {
          // Payment redirection link at response.payment_request.longurl
         
          const responseData=JSON.parse(response);
          const redirectUrl=responseData.payment_request.longurl;
          console.log(redirectUrl);
          res.status(200).json(redirectUrl)

        }
      });
})
router.get('/callback/',(req,res)=>{
    const url_part=url.parse(req.url,true),
    responseData=url_part.query;
   console.log(responseData);
})
module.exports=router;