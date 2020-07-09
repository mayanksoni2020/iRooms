const express=require('express');
const app=express();
const path=require('path');
//const multer=require('multer');
const mongoose=require('mongoose');
const config=require('config');
app.use(express.json()); 
app.use('/uploadsNEW',express.static('uploadsNEW'))

const db=config.get('mongodbURL');
mongoose.connect(db,{
  useNewUrlParser:true,
  useCreateIndex:true
}).then(()=>console.log("mongodb connected")).catch((e)=>console.log(e));

app.use('/api/irooms',require('./API/Room/room'));
app.use('/api/auth',require('./API/User/user'));
app.use('/api/userprofile',require('./API/User/userprofile'));
app.use('/api/payment',require('./API/Payment/payment'));


if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`server started on  ${port}`);
})
module.exports=app;