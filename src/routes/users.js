// Express y otros modulos
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const path = require('path');
const multer = require("multer");
const db = require('../../database/models');
// Controladores
const usersController = require("../controllers/usersController")

// Middlewares
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
// Express Validator
const registerValidations=[
    body('first_name').notEmpty().withMessage('Tienes que escribir un nombre').isLength({min:2}).withMessage("Debe contener al menos dos caracteres"),
    body("last_name").notEmpty().withMessage('Tienes que escribir un apellido').isLength({min:2}).withMessage("Debe contener al menos dos caracteres"),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({min:8}).withMessage("Debe contener al menos ocho caracteres"),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg','.JPG','.jpeg','.JPEG', '.png','.PNG','.gif','.GIF'];		
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
const loginValidations=[
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
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
router.post("/login",loginValidations,usersController.processLogin);

// Formulario de Registro
router.get("/register",guestMiddleware,usersController.register);

// Proceso de Registro
router.post("/register",registerValidations,upload.single("image"),usersController.processRegister)

// Vista del perfil de usuario
router.get("/profile",authMiddleware,usersController.userProfile);

// Logout
router.get("/logout",usersController.logout);

//Vista de la edicion de usuario
router.get("/edit/:id",usersController.edit);

//Proceso de edicion
router.put("/:id",upload.single("image"),usersController.processEdit)


module.exports = router;