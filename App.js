const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {places}=require("./Models/Places.js")
const {placesmodel}=require("./Models/Places.js")

const app=express()
app.use(cors())

app.use(express.json())
mongoose.connect("mongodb+srv://eby99:qwerty123@cluster0.snm8zbn.mongodb.net/places?retryWrites=true&w=majority&appName=Cluster0")

app.post("/Add",(req,res)=>{
    let input = req.body
    let places=new placesmodel(input)
    places.save()
    console.log(places)
    
    res.json({status:"success"})
})



app.post("/View",(req,res)=>{
    placesmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/Search",(req,res)=>{
    let input=req.body
    placesmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/Delete",(req,res)=>{
    let input=req.body
    placesmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"Deleted"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"Error"})
        }
    )
    
})

app.listen(8080,()=>(
    console.log("Server ON !")
))

