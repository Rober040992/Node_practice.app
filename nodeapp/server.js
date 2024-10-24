import http from 'node:http'
//esto es la libreria http para crear el server


/*
En Node.js, Express es una librería o framework que simplifica el manejo de rutas y solicitudes HTTP. 
En lugar de escribir código desde cero para gestionar el enrutamiento de solicitudes HTTP, podemos usar Express para hacerlo de forma rápida y eficiente.
Por ejemplo, sin Express, manejar una solicitud HTTP podría ser tedioso y requerir más código
esta se instala atraves de npm install express
*/
import debugLib from 'debug'
import app from './app.js'
//estamos usando ecmascript a traves de  "type": "module", que esta en el package.json

const debug = debugLib('nodeapp:server')
//esta vari
const port = process.env.PORT || 3000


// create http server
const server = http.createServer(app)

// Se define un evento listening para el servidor. Cuando el servidor comienza a escuchar solicitudes, ejecuta el callback que imprime el mensaje "Servidor arrancado" en la consola.
server.on('error', err => console.error)
server.on('listening', () => { debug(`Servidor arrancado en puerto ${port}`)})
// Finalmente, el servidor empieza a escuchar en el puerto const port. 
server.listen(port) //PORT=3001 node server.js para abrir el server
//esto seria para crear una aplicacion de express
//DEBUG=nodeapp:* node --watch server.js esto para 
// npm install cross-env para que todo se ejecute correctamente
//para lanzr el server despues de haber en usar npm run dev, que esta declarado en los scripts package json,