const jwt = require('jsonwebtoken');
// Importamos el paquete jsonwebtoken para manejar la verificación de tokens JWT


//Función middleware para verificar el token JWT
const verifyToken = (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1]; // Bearer token
  // Extraemos el token del encabezado Authorization, asumiendo que está en el formato "Bearer token"

  if (!token) return res.status(403).json({ message: 'Token no proporcionado' });
  // Si no se proporciona el token, respondemos con un error 403

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Verificamos el token usando la clave secreta definida en las variables de entorno
    req.user = decoded; 
    // Si la verificación es exitosa, decodificamos el token y lo asignamos a req.user
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = verifyToken;
