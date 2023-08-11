const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:0,
        max:20
    },
    email:{
        type:String,
        require:true,
        min:3,
        max:60,
        unique:true

    },
    password:{
        type:String,
        require:true,
        min:1
    }

},{timestamps:true});
module.exports=mongoose.model("user",userSchema);