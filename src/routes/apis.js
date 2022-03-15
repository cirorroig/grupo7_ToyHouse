const express = require('express');
const router = express.Router();
const apisController = require("../controllers/apisController")

router.get("/users",apisController.userList);
router.get("/users/:id",apisController.user);
router.get("/products",apisController.productList);
router.get("/products/:id",apisController.product);


module.exports = router;  