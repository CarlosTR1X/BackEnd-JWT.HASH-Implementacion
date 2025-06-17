const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/Users');
// Importamos el modelo de usuario, bcrypt y jsonwebtoken para hash de contraseñas y generación de tokens JWT

const register = async (req, res) => {
    const { email, password } = req.body;
    // Recibimos email y contraseña del cuerpo de la solicitud

    if (!email || !password) return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    // Validamos que ambos campos estén presentes

    try {
        const existingUser = await User.findOne({ email });
        // Verificamos si el usuario ya existe en la base de datos
        if (existingUser) return res.status(409).json({ message: 'El usuario ya existe' });


        const hashedPassword = await bcrypt.hash(password, 10);
        // Hasheamos la contraseña usando bcrypt con un salt de 10 rondas
        const newUser = new User({ email, password: hashedPassword });
        // Creamos una nueva instancia del modelo User con el email y la contraseña hasheada
        await newUser.save();
        // Guardamos el nuevo usuario en la base de datos

        return res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    // Recibimos email y contraseña del cuerpo de la solicitud
    if (!email || !password) return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    // Validamos que ambos campos estén presentes


    try {
        const user = await User.findOne({ email });
        // Buscamos el usuario en la base de datos por su email
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });


        const isMatch = await bcrypt.compare(password, user.password);
        // Comparamos la contraseña proporcionada con la contraseña hasheada almacenada en la base de datos
        if (!isMatch) return res.status(401).json({ message: 'Credenciales inválidas' });

        const payload = { id: user._id, email: user.email };
        // Creamos un payload para el token JWT con el ID y email del usuario
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        // Generamos un token JWT con el payload, la clave secreta y el tiempo de expiración
        return res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
    return res.status(200).json({ token });
}
module.exports = { login, register };