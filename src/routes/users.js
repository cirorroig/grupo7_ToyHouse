const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController")
const { body } = require('express-validator');
const path = require('path');
const multer = require("multer");

// Express Validator
const registerValidations=[
    body('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body("last_name").notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];		
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
        cb(null,"./public/images/Users")
    },
    filename:(req,file,cb)=>{
        cb(null,"user-" + Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({storage})

// Rutas
router.get("/login",usersController.login);
router.get("/register",usersController.register);
router.post("/register",upload.single("image"),registerValidations,usersController.processRegister)



module.exports = router;