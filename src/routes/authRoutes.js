const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
// Importamos express y el controlador de autenticación


// Definimos las rutas para el registro y el inicio de sesión de usuarios
router.post('/login', login);
router.post('/register', register);

module.exports = router;
