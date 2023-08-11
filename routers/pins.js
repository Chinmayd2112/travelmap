const router=require("express").Router();
const Pin=require("../modules/Pin");
router.post("/",async (req,res) =>{
    const newPins=new Pin(req.body)
    try{
        const savepins=await newPins.save();
        res.status(200).json(savepins);
    }
    catch(err){
        res.status(400).json(err)
    }
});
router.get("/",async (req,res) =>{
    try{
        const spins= await Pin.find();
        res.status(200).json(spins);
    }
    catch(error){
        res.status(400).json(error);
    }
})
module.exports =router;