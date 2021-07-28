var mongoose = require("mongoose")

var ProductSchema =    mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    brand:{
        type:String,
        required:true     
    }
})

var ProductModel = mongoose.model("Product",ProductSchema)
module.exports = ProductModel 

//module.exports = mongoose.model("Product",ProductSchema)

