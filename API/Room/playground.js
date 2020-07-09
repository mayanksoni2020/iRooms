const path = require("path");
const multer = require("multer");
const express=require('express');


const router = express.Router();
const Play=require('../../Modal/adminplay');

router.get('/upload',(req,res)=>{
    Play.find({}).then(result=>{
        res.status(200).send(result);
        
    })
})
module.exports=router;