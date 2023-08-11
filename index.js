const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const pinroute=require("./routers/pins");
const userroute=require("./routers/users");
const app=express();


dotenv.config();
app.use(express.json())
mongoose.connect(process.env.mongo_url).then(() => {console.log("mongodb connected");
})
.catch((err) => console.log(err));

app.use("/api/pins",pinroute);
app.use("/api/users",userroute);
app.listen(8080,() =>{
    console.log("backend server is running");
})