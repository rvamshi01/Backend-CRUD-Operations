const express = require("express");
const mongoose= require("mongoose");
const app= express();
const connection= require("./dbConnection")
connection();
const carmodel=require("./Models/carmodel")

app.use(express.json());

app.get("/", async(req,res)=>{
    const car= await carmodel.find({})
    res.status("get the cars").json(car)
})

app.post("/car",async(req,res)=>{
    const {brandname,model,price}= req.body;
    const car= await carmodel.create({brandname,model,price});
    res.status(201).json(car);
})
app.put("/:id",async(req,res)=>{
    const id= req.params.id;
    const {brandname,model,price}=req.body;
    const car= await carmodel.findByIdAndUpdate(id,{brandname,model,price}, {new:true});
    res.status(201).json(car)
})
app.get("/:id",async(req,res)=>{
    const id= req.params.id
    const car= await carmodel.findById(id)
    res.status(201).json(car)
})
app.delete("/:id",async(req,res)=>{
    const id= req.params.id
    const car= await carmodel.findByIdAndDelete(id)
    res.status(201).json(car)
})
app.listen(80,()=>{
    console.log("server at live")
})