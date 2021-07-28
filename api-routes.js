var router = require("express").Router()


var productController = require("./controller/productController")
var categoryController = require("./controller/categoryController")


router.route("/addproduct").post(productController.addProduct)
router.route("/listproducts").get(productController.listProduct)

router.route("/addcategory").post(categoryController.addCategory)

module.exports = router 
