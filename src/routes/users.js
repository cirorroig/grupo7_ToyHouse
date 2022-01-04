// Express y otros modulos
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const path = require('path');
const multer = require("multer");

// Controladores
const usersController = require("../controllers/usersController")

// Middlewares
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
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

// Formulario de Login
router.get("/login",guestMiddleware,usersController.login);

// Proceso del Login
router.post("/login",usersController.processLogin);

// Formulario de Registro
router.get("/register",guestMiddleware,usersController.register);

// Proceso de Registro
router.post("/register",upload.single("image"),registerValidations,usersController.processRegister)

// Vista del perfil de usuario
router.get("/profile",authMiddleware,usersController.userProfile);

// Logout
router.get("/logout",usersController.logout);

module.exports = router;