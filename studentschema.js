var mongoose = require("mongoose")

var StudentSchema = new mongoose.Schema({
     
    name:String,
    address:String

})

module.exports = mongoose.model("student",StudentSchema)