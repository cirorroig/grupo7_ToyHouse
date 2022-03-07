const express = require("express");
const multer = require("multer");
const router = express.Router();
const path=require("path")
const productController = require("../controllers/productController")
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const { body } = require('express-validator');

// Express Validator
const productValidations=[
    body("name").notEmpty().withMessage("Ingrese un nombre de producto").isLength({min:5}).withMessage("Debe contener al menos cinco caracteres"),
    body("description").notEmpty().withMessage("Ingrese una descripcion").isLength({min:20}).withMessage("Debe contener al veinte caracteres"),
    body("age").notEmpty().withMessage("Seleccione un rango de edad"),
    body("category").notEmpty().withMessage("Seleccione una categoria para el producto"),
    body("detailedDescription").notEmpty().withMessage("Escriba una descripcion detallada del producto"),
    body("price").notEmpty().withMessage("Ingrese el precio del producto"),
    body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error("Las extensiones de archivo permitidas son" + acceptedExtensions.join(', '));
			}
		}

		return true;
	})
]


// Multer
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
router.get("/create",authMiddleware,productController.create)
router.get("/:id",productController.detail)
router.get("/:id/edit",authMiddleware,productController.edit)

// Creacion de  Productos //
router.post("/",upload.single("image"),productValidations,productController.store)

// Edicion de Productos //
router.put("/:id",upload.single("image"),productValidations ,productController.update)

// Eliminacion de productos //
router.delete("/:id",productController.destroy)

//Busqueda de productos
router.post("/search",productController.search)

module.exports = router;