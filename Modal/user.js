const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    unique:true
},
password:{
    type:String,
    required:true
},
cart:[{
  type:Schema.Types.ObjectId,
  ref:'car'
}]

})
const User=mongoose.model('user',UserSchema);
module.exports=User;