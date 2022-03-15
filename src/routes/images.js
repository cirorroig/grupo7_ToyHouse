const express = require('express');
const router = express.Router();
const imagesController = require("../controllers/imagesController")

router.get("/user/:image",imagesController.userImg)
router.get("/product/:image",imagesController.productImg)

module.exports = router;  
