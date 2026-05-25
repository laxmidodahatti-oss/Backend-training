 const mongoose=require("mongoose");
 const noteschema = new mongoose.Schema({
    heading:{
        type:String,
        require:true,
        uppercase:true
    },
    content:{
        type:String,
        require:true
    }
 }) 
 module.exports = mongoose.model("Notes",noteschema);

