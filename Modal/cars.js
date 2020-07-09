const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const carSchema=new Schema({
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
    labelHouse:{
        type:String,
        required:true
    },
    seller:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
})
const Car=mongoose.model('car',carSchema);
module.exports=Car;