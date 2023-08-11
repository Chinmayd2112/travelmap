const mongoose=require('mongoose');


const pinSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
       
    },
    title:{
        type:String,
        require:true,
       

    },
    desc:{
        type:String,
        require:true,
        min:3,

    },
    travel:{
        type:String,
        require:true,
    },
    hotels:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
        min:0,
        max:5 

    },
    lat:{
        type:Number,
        require:true,

    },
    long:
    {
    type:Number,
    require:true,
}

    

},{timestamps:true},)
module.exports=mongoose.model("Pin",pinSchema);
//17.73161898845789, 73.75631308061158