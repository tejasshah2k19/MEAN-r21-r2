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

    //ProductModel.find({},{},function(err,data){
    ProductModel.find(function(err,data){
        if(err){
            res.json({status:-1,msg:"Something Went Wrong",data:err})
        }else{
            res.json({status:200,msg:"List Retrived",data:data})           
        }
    })     
}

exports.deleteProductById = function(req,res){
    ProductModel.findByIdAndDelete({_id:req.params.productId},function(err,data){
        if(err){
            res.json({status:-1,msg:"Something Went Wrong",data:err})
        }else{
            res.json({status:200,msg:"Product Deleted",data:data})           
        }
    })
}
//api/getproduct/2134324324234
exports.getDataByProductId = function(req,res){
    // console.log(req.query)
    ProductModel.find({_id:req.params.productId},function(err,data){
        if(err){
            res.json({status:-1,msg:"Something Went Wrong",data:err})
        }else{
            res.json({status:200,msg:"Product Retrvied",data:data})           
        }
    })
}
exports.getDataByProductIdQuery = function(req,res){
    ProductModel.find({_id:req.query.productId},function(err,data){
        if(err){
            res.json({status:-1,msg:"Something Went Wrong",data:err})
        }else{
            res.json({status:200,msg:"Product Retrvied",data:data})           
        }
    })
}
//update product set name = newname where id = 1 
exports.updateProduct = function(req,res){

        // ProductModel.findByIdAndUpdate 
        ProductModel.updateOne({_id:req.body._id},{$set:{name:req.body.name}},function(err,data){
            if(err){
                res.json({status:-1,msg:"Something Went Wrong",data:err})
            }else{
                res.json({status:200,msg:"Product updated",data:data})           
            }            
        })
}

