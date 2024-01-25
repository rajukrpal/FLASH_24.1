const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/RegistarUser_24")
.then(()=>{
    console.log("mongoose connected !")
})



const registarUser = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    conpassword:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model("user",registarUser);
