let express=require("express");
let router = express.Router(); //router reference.

let ProductController =require("../controller/product.controller.js")
router.get("/allProductDetails",ProductController.getProductDetails)
router.get("/retriveProductById/:pid",ProductController.getProductById)
router.post("/storeProductDetails",ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProductById);
router.put("/updateProductPrice",ProductController.updateProductByPrice)





module.exports=router;