const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const students = require("./studentController")


mongoose.connect("mongodb://localhost:27017/mydb").then(()=>{
    console.log("db connected")
})
.catch(err=>{
    console.log("error in db connection",err);
})


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/",students)

app.listen(3000,()=>{
    console.log("server started on 3000");
})