const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({}, { strict: false });
// Este esquema es flexible porque users puede tener otros campos

module.exports = mongoose.model('User', userSchema, 'users'); 
// Exportamos el modelo User, que se conecta a la colección 'users' en MongoDB
