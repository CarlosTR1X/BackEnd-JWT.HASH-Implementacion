# 🛡️ Backend JWT + HASH - Implementación

Este proyecto es un backend en **Node.js** que implementa un sistema de autenticación con:

- Registro e inicio de sesión de usuarios  
- Encriptación de contraseñas con **bcrypt**  
- Generación y verificación de **JSON Web Tokens (JWT)**  
- Base de datos en **MongoDB** usando **Mongoose**

---

## 🚀 Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB Atlas + Mongoose  
- jwt (jsonwebtoken)  
- bcrypt  
- dotenv (variables de entorno)  
- Thunder Client o Postman para pruebas

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CarlosTR1X/BackEnd-JWT.HASH-Implementacion.git
cd BackEnd-JWT.HASH-Implementacion
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz y agrega:

```env
PORT=3000
JWT_SECRET=miSuperClaveSecreta123
JWT_EXPIRES_IN=1h
MONGO_URI=mongodb+srv://admin:TU_CONTRASEÑA@users.w8hmzai.mongodb.net/?retryWrites=true&w=majority&appName=users
```

> Reemplaza `TU_CONTRASEÑA` por la contraseña real de tu usuario en MongoDB Atlas (sin comillas ni espacios).

4. Levanta el servidor:

```bash
node src/app.js
```

---

## 🔐 Endpoints de autenticación

### ✍️ Registro

- **URL**: `POST /api/auth/register`  
- **Body (JSON)**:

```json
{
  "email": "ejemplo@correo.com",
  "password": "123456"
}
```

- **Respuesta**:

```json
{
  "message": "Usuario registrado exitosamente"
}
```

---

### 🔑 Login

- **URL**: `POST /api/auth/login`  
- **Body (JSON)**:

```json
{
  "email": "ejemplo@correo.com",
  "password": "123456"
}
```

- **Respuesta**:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

Guarda el token para futuras peticiones a rutas protegidas.

---

## 🚧 Ruta protegida

### 👤 Perfil del usuario

- **URL**: `GET /api/perfil`  
- **Header**:

```
Authorization: Bearer TU_TOKEN_AQUÍ
```

- **Respuesta**:

```json
{
  "mensaje": "Este es tu perfil",
  "usuario": {
    "id": "60f6c8a...",
    "email": "ejemplo@correo.com"
  }
}
```

---

## 👥 Gestión de usuarios

### 📋 Obtener usuarios

- **URL**: `GET /api/users`  
- **Descripción**: Devuelve hasta 10 usuarios guardados en la base de datos.  
- **Ejemplo de respuesta**:

```json
[
  {
    "_id": "60f6c8a...",
    "email": "ejemplo@correo.com",
    "password": "$2b$10$..."
  }
  // ...
]
```

---

## 📁 Estructura del proyecto

```
src/
│
├── app.js
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── Users.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
└── .env
```

---

## 🔒 Seguridad

- **bcrypt** con 10 salt rounds para hashear contraseñas  
- **JWT** con firma segura y tiempo de expiración configurable  
- Rutas protegidas mediante middleware `verifyToken`

---

## 🌟 Mejoras opcionales

- Validación de email (formato/estructura) y políticas de contraseña  
- Implementar refresh token para sesiones prolongadas  
- Agregar roles (admin, user) para control de acceso  
- Revocación o blacklist de tokens para logout seguros

---

## 📝 Autor

- **CarlosTR1X**  
  GitHub: [CarlosTR1X](https://github.com/CarlosTR1X)

---

## 👍 Cómo avanzar

Con esta base ya funcional, puedes integrar nuevas features como verificación por correo, recuperación de contraseña, o endpoints CRUD más avanzados. ¡Ánimo con el proyecto! 🚀
