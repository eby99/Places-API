const mongoose=require("mongoose")
const schema=mongoose.Schema({

    "pname":String,
    "desc":String,
    "cost":String,
    "date":String,
    "uname":String,
    "passwd":String


})

let placesmodel=mongoose.model("places",schema);
module.exports={placesmodel}