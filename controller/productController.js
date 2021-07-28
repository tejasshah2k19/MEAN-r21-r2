var ProductModel = require("../model/productModel")
//post 
exports.addProduct = function (req, res) {
    console.log(req.body);

    let nameValue = req.body.name
    let priceValue = req.body.price
    let categoryValue = req.body.category
    let brandValue = req.body.brand

    let product = new ProductModel({
        name:nameValue,
        price:priceValue,
        category:categoryValue,
        brand:brandValue
     })

    product.save(function(err,data){
        
        // console.log(err);
        // console.log(data);

        if(err){
            res.json({status:-1,msg:"Something Went Wrong",data:err})
        }else{
            res.json({status:200,msg:"Product added ",data:data})
        }

    })

    //res.send({ status: 200, msg: "done", data: "" })
}

exports.listProduct = function (req, res) {
    console.log("list api called...");

    res.send({ status: 200, msg: "done", data: "list...." })
}