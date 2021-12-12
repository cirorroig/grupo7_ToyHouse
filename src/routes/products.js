const express = require("express");
const multer = require("multer");
const router = express.Router();
const path=require("path")
const productController = require("../controllers/productController")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/images/Products")
    },
    filename:(req,file,cb)=>{
        cb(null,"product-" + Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({storage})


// Envio de formularios y htmls //

router.get("/",productController.list);
router.get("/create",productController.create)
router.get("/:id",productController.detail)
router.get("/:id/edit",productController.edit)

// Creacion de  Productos //
router.post("/",upload.single("image"),productController.store)

// Edicion de Productos //
router.put("/:id",upload.single("image") ,productController.update)

// Eliminacion de productos //
router.delete("/:id",productController.destroy)


module.exports = router;