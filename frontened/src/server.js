const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/login', (req, res) => {
  const { usuario, contraseña } = req.query;
  // Aquí tu lógica de autenticación
  if (usuario === 'admin' && contraseña === 'admin') {
    res.status(200).send('Usuario conectado');
  } else {
    res.status(401).send('Usuario incorrecto');
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});