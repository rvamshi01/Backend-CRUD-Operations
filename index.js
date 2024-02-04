const express= require("express")
const mongoose= require("mongoose")
const app= express();
const connection= require("./dbConnection")
connection();
const usermodel=require("./Models/usermodel")



app.use(express.json());

app.get("/",async(req,res)=>{
    const user= await usermodel.find({});
    res.status(200).json(user);
})
app.post("/post",async(req,res)=>{
    const {username,email,password}=req.body
    const user=await usermodel.create({username,email,password});
    res.status(201).json(user)
})
app.put("/:id",async(req,res)=>{
    const id= req.params.id;
    const {username,email,password}=req.body;
    const user= await usermodel.findByIdAndUpdate(id,{username,email,password},{new:true});
    res.status(200).json(user)

})
app.get("/:id",async(req,res)=>{
    const id= req.params.id;
    const user= await usermodel.findById(id);
    res.status(200).json(user)
})
app.delete("/:id",async(req,res)=>{
    const id= req.params.id;
    const user= await usermodel.findByIdAndDelete(id)
    res.status(200).json(user)
})
app.listen(80,()=>{
    console.log("server at live")
})
