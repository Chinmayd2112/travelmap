const router=require("express").Router();
const User=require("../modules/user");
const bcrypt = require('bcrypt');

router.post("/register",async (req,res) =>{
    try{
     const salt= await bcrypt.genSalt(10);
     const hashpassword=await bcrypt.hash(req.body.password,salt);
    //  console.log(hashpassword);
     const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashpassword,   
     });
    //  console.log(newUser);
     const users=await newUser.save();
//   console.log(users); 
    }
    catch(err){
        res.status(400).json(err);
    }

});
router.post("/login",async (req,res) =>{
    try{
     const users=await User.findOne({username:req.body.username});
     !users && res.status(400).json("enter valid username or password");
   //  console.log(users);
    // res.status(200).json(users);
    const vpass=await bcrypt.compare(req.body.password,users.password);
    // console.log(vpass);
    !vpass && res.status(400).json("enter valid username or password");
    res.status(200).json(users);
    }
    catch(err){
        res.status(400).json(err);
    }
});


module.exports =router;