# 1. Verifica que Node.js y npm están instalados
node -v
npm -v

# 2. Crea el directorio del proyecto y accede a él
mkdir nombre-de-tu-proyecto
cd nombre-de-tu-proyecto

# 3. Inicializa el proyecto con npm
npm init -y

# 4. Instala Express
npm install express

# 5. Crea el archivo principal de la app
touch app.js

# 6. Escribe el código básico de la app
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});

# 7. Ejecuta el servidor con --watch
node --watch app.js