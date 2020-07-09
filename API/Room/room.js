const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const path=require('path');
const Room=require('../../Modal/rooms');
const multer=require('multer');

const storage = multer.diskStorage({
    destination: "./uploadsNEW/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("myImage");
 

// get details of all rooms
router.get('/',(req,res)=>{
    Room.find().then((rooms)=>{
        
        res.status(200).json(rooms)
    }).catch((e)=>{
        res.status(404).json({
            message:e.message
        })
    })
})

router.get('/private',(req,res)=>{
    Room.find({labelHouse:"private"}).then((rooms)=>{
        res.json(rooms);
    }).catch((e)=>{
        res.status(404).json({
            message:e.message
        })
    })
})

router.get('/shared',(req,res)=>{
    Room.find({labelHouse:"shared"}).then((rooms)=>{
        res.json(rooms);
    }).catch((e)=>{
        res.status(404).json({
            message:e.message
        })
    })
})
router.get('/family',(req,res)=>{
    Room.find({labelHouse:"family"}).then((rooms)=>{
        res.json(rooms);
    }).catch((e)=>{
        res.status(404).json({
            message:e.message
        })
    })
})
router.get('/:id',(req,res)=>{
    Room.findById(req.params.id).then((result)=>{
        if(!result)
        {
            return res.status(404).end();
        }
        return res.status(200).send(result);
    }).catch((e)=>{
        res.send({
            message:"somthing went wrong"
        })
    })
})
router.post("/upload",function(req,res){
    upload(req,res,function(err){
        const {houseId,statusTag,houseName,houseDistance,area,bedding,furnished,houseRent,securityDeposit,labelHouse,gender,roomDesc}=req.body;
    const image=req.file;
    const imageUrl=image.path;
    console.log(req.body);
    const newRoom=new Room({
        houseId,statusTag,imageUrl,houseName,houseDistance,area,bedding,furnished,houseRent,securityDeposit,labelHouse,gender,roomDesc
    
    })
    newRoom.save().then(()=>{
        res.status(201).json({
           imageUrl,houseId,statusTag,houseName,houseDistance,area,bedding,furnished,houseRent,securityDeposit,labelHouse,gender,roomDesc
        })
    }).catch((e)=>{
        res.send(e);
    })
})
})


//searching for individual

router.get('/:id',(req,res)=>{
    const _id=req.params.id;
   Room.findById(_id).then((room)=>{
       if(!room){
           return res.status(404).send()
       }
       res.send(room)
   }).catch((e)=>{
       res.status(500).send();
   })
})

//for updation
router.patch('/:id',async(req,res)=>{
    try{
    const rooms=await Room.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!rooms)
    {
        res.status(407).send()
    }
    res.status(200).send(rooms)
}catch (e){
res.status(500).send(e);
}
})
module.exports=router;