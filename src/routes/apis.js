const express = require('express');
const router = express.Router();
const apisController = require("../controllers/apisController")

router.get("/users",apisController.userList);
router.get("/users/:id",apisController.user);
router.get("/products",apisController.productList);
router.get("/products/last",apisController.lastProduct);
router.get("/products/:id",apisController.product);
router.get("/productsSearch/",apisController.emptySearch);
router.get("/productsSearch/:keyword",apisController.productSearch);
router.get("/ages",apisController.ageList);
router.get("/sizes",apisController.sizeList);
router.get("/categories",apisController.categoryList);


module.exports = router;  