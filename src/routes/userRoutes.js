const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
// Importamos express y el controlador de usuarios

// Definimos las rutas para obtener todos los usuarios
router.get('/', getAllUsers);

module.exports = router;
