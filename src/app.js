const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes'); // Importamos las rutas de autenticación 
const verifyToken = require('./middlewares/authMiddleware'); // Importamos el middleware para verificar el token JWT
const users =  require('./routes/userRoutes'); // Importamos las rutas de usuarios
const connectDB = require('./config/database'); // Importamos la función para conectar a la base de datos
require('dotenv').config(); // Cargar variables de entorno desde .env
// Importamos express y otros módulos necesarios

connectDB();
// Iniciamos la Conexión a la base de datos


// Configuraciónes del servidor 
app.use(express.json());

//Ruta principal del servidor
app.get('/', (req, res) => {
 res.send('Bienvenido al servidor')
});


app.use('/api/auth', authRoutes);
// Definimos las rutas de autenticación
app.use('/api/users', users);
// Definimos las rutas de usuarios

// Ruta protegida que requiere autenticación (La utilizamos para verificar el token JWT)
app.get('/api/perfil', verifyToken, (req, res) => {
  res.json({ mensaje: 'Este es tu perfil', usuario: req.user });
});


app.listen(process.env.PORT, () => {
    console.log(
        `Servidor funcionando en el puerto http://localhost:${process.env.PORT}`
    );
});