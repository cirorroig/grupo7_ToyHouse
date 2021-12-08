const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require("../controllers/productController")

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "-" +Date.now() + path.extname(file.originalname))
    }
})

let upload=multer({storage})


// Envio de formularios y htmls //

router.get("/",productController.list);
router.get("/create",productController.create)
router.get("/:id",productController.detail)
router.get("/:id/edit",productController.edit)

// Creacion de  Productos //
router.post("/",upload.single("product-image"),productController.store)

// Edicion de Productos //
router.put("/:id​",upload.single("product-image") ,productController.update)

// Eliminacion de productos //
router.delete("/:id",productController.destroy)


module.exports = router;