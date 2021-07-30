var router = require("express").Router()


var productController = require("./controller/productController")
var categoryController = require("./controller/categoryController")


router.route("/addproduct").post(productController.addProduct)
router.route("/listproducts").get(productController.listProduct)
router.route("/deleteproducts/:productId").delete(productController.deleteProductById)
router.route("/getproduct/:productId").get(productController.getDataByProductId)
router.route("/getproducts").get(productController.getDataByProductIdQuery)
router.route("/updateProduct").put(productController.updateProduct)

router.route("/addcategory").post(categoryController.addCategory)

module.exports = router 
