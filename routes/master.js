var express = require('express');
var router = express.Router();
const master = require("../controller/master");
const baseHelper = require("../helper/bashelpers");
var multer = require("./multer");


//category
router.post("/insertEditCategory",baseHelper.CheckAdminToken, master.insertEditCategory);
router.post("/categroyList",baseHelper.CheckAdminToken, master.categoryList);
router.post("/deleteCategory",baseHelper.CheckAdminToken, master.deleteCategory);
router.get("/fetchCategoryName", master.fetchCategoryName);

//product
router.post("/insertEditProduct",multer.single("img"), master.insertEditProduct);
router.post("/productList", master.productList);
router.post("/deleteProduct", master.deleteProduct);
router.get("/fetchParentName", master.fetchParentName);


module.exports = router;
