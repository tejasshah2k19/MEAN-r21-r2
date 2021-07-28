const express = require("express")
const mongoose = require("mongoose")
const route = require("./api-routes")
const app = express()

mongoose.connect("mongodb://localhost:27017/mydb").then(() => {
    console.log("db Connected");
}).catch(err => {
    console.log("db Not connected ... . . ", err);
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api",route)


app.listen(3000, () => {
    console.log("server Strated on 3000");
})
