const mongoose = require("mongoose")
const carmodel= mongoose.Schema({
   brandname:{type:String,required:true},
   model:{type:String,required:true},
   price:{type:String,required:true}

})
module.exports=mongoose.model("Car",carmodel)