const User = require('../models/Users');
// Importamos el modelo de usuario para interactuar con la base de datos

//Funcion para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().limit(10); 
    // Especificamos un límite de 10 usuarios para la consulta
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

module.exports = { getAllUsers };
