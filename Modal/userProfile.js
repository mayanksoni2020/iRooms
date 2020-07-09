const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserProfileSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        city:{
            type:String,
            require:true
        },
        pincode:{
            type:String,
            require:true
        },
        state:{
            type:String,
            require:true
        }
    },
    occupation:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    option:{
        type:String,
    }
    
}) 
const UserProfile=mongoose.model('userProfile',UserProfileSchema);
module.exports=UserProfile;