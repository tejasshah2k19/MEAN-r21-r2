const express = require("express")
const route = express.Router()
const Student = require("./studentschema")

module.exports = route.post("/students",function(req,res){
    console.log(req.body)
   
    const student = new Student({
        studentId:123,
        name:req.body.name,
        address:req.body.address
    })

     student.save()
    res.send({"data":student,status:200,"msg":"student added"})
})

module.exports = route.get("/students",function(req,res){
    console.log("retrive all students")
    res.send({"msg":"done"})
})
