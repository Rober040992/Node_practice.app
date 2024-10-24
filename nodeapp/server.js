import express from 'express' 
/*
En Node.js, Express es una librería o framework que simplifica el manejo de rutas y solicitudes HTTP. 
En lugar de escribir código desde cero para gestionar el enrutamiento de solicitudes HTTP, podemos usar Express para hacerlo de forma rápida y eficiente.
Por ejemplo, sin Express, manejar una solicitud HTTP podría ser tedioso y requerir más código
esta se instala atraves de npm install express
*/
//estamos usando ecmascript a traves de  "type": "module", que esta en el package.json
import http from 'node:http'
//esto es la libreria http para crear el server

const app = express()

// Este fragmento define una ruta para manejar solicitudes HTTP GET a la raíz del servidor (/). Cuando alguien accede a la URL principal del servidor, el servidor responde con el mensaje "Hola". 
// req es el objeto de solicitud, res es la respuesta y next es un callback
app.get('/', (req, res, next) => {
    res.send('Hola')
})

// create http server
const server = http.createServer(app)

// Se define un evento listening para el servidor. Cuando el servidor comienza a escuchar solicitudes, ejecuta el callback que imprime el mensaje "Servidor arrancado" en la consola.
server.on('listening', () => { console.log('Servidor arrancado') })
// Finalmente, el servidor empieza a escuchar en el puerto 3000. Esto significa que el servidor estará accesible en http://localhost:3000
server.listen(3000)
//despues de todo este codigo escribir en consola: node --watch server.js para arrancar 
//esto seria para crear una aplicacion de express