const express=require("express");
const app=express();
const mongoose = require("mongoose");
require("dotenv").config();
const port=process.env.port

app.user(express.json())

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("mongodb is succefuly connected");
    app.listen(5000,()=>{
console.log("server is running is port number 5000");
});
})
.catch((e)=>{
    console.log("somthing went wrong",e);
})
console.log ("hello");

