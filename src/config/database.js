const mongoose = require('mongoose');
// Importaciones necesarios para conectar a MongoDB


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); 
  }
};
// Realizamos la conexión a la base de datos MongoDB
module.exports = connectDB;
