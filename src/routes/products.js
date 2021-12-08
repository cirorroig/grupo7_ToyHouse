const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require("../controllers/productController")


router.get("/",productController.list);
router.get("/create",productController.create)
router.get("/:id",productController.detail)
router.get("/​:id​/edit",productController.edit)
router.post("/",productController.store)
router.put("/:id​",productController.update)
router.delete("/:id",productController.destroy)


module.exports = router;