const mongoose= require("mongoose")
const connection= async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/items")
        console.log("connected Database")
    }
    catch(err){
        console.log(err);
    }
}
module.exports= connection