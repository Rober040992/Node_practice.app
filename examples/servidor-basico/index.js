// cargar librería http
const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// definir un servidor
const server = http.createServer(function(request, response) {
response.writeHead(200, { 'Content-type': 'text/html' });

//aqui hacemos qu neo este en negrita <b>
response.end(`Wake up, <b>${chance.animal()}</b>...`);
})

// arrancar el servidor
server.listen(1338, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1338');

//usando node --watch se aplican los campbios automaticamente  o bien instalar npm ; npm init , dale a todo intro y despues npm install nodemon , copia esto en el package json scrips "dev": "nodemon index.js"

//como instalar librerias de codigo; npm install nombre (aparecen en el dependences del package json) para ir al repo de la libreria npm repo nombre