const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const RoomSchema=new Schema({
    houseId:{
        type:String,
        required:true
        
    },
    imageUrl:{
        type:String,
        required:true
    },
    statusTag:{
        type:String,
        required:true
    },
    houseName:{
        type:String,
        required:true
    },
    roomDesc:{
        type:String,
        required:true
    },
    houseDistance:{
        type:String,
        required:true
    },
    furnished:{
        type:String,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    bedding:{
        type:Number,
        required:true
    },
    houseRent:{
        type:Number,
        required:true
    },
    securityDeposit:{
        type:Number,
        required:true
    },
    labelHouse:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
  
})
const Room=mongoose.model('room',RoomSchema);
module.exports=Room;