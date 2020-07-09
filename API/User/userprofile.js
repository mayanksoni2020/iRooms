//const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const UserProfile=require('../../Modal/userProfile');
router.get('/',(req,res)=>{
    UserProfile.find().then((user)=>{
        res.status(200).send(user);
    })
})

router.post('/',(req,res)=>{
    const {name,email,occupation,phone,option,address}=req.body;
    const newProfile=new UserProfile({
        name,email,occupation,phone,option,address
    });
    newProfile.save().then((oneUser)=>{
        res.send(oneUser)
    }).catch((e)=>{
        res.send(e.message);
    })
})
module.exports=router;