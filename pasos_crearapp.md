# Creación de una aplicación web con Node en Express.

### crea tu carpeta "NAME PROYECT",
y dentro de esta: 

## 1 . Verifica que Node.js esta instalado
node -v

## 2 inicializacion y creacion del proyecto con el package.json
ahora en la terminal(bash) 
- npm init -y
si has clonado el repo tendras que usar npm install

## 3 si vamos a crearla con express(que es lo mas común)

npm i express  
ahora meter la carpeta node_modules en .ignore

## 4 creamos el server en la carpeta main:  
- creamos file server.js  
ahora el package.json le metemos el "type": "module", esto es para usar el estándar de modulos ecma script
- tambien creamos el fichero app.js
## 5 escribimos el codigo basico en el fichero server.js:

```javascript
import express from 'express'
import http from 'node:http'

const app = express()

app.get('/', (req, res, next) => {
    res.send('Hola')
})

// creación del server:
const server = http.createServer(app)
server.on('listening', () => { console.log('Servidor arrancado') })
server.listen(3000)
```


### tampien podemos instalar un controlador de versiones node ;
En windows - https://github.com/coreybutler/nvm-windows
 nvm list
 nvm install <version>
 nvm use <version>

### lineas de comandos:  
vamos a usar el --watch
ejm npm --watch exaples/app.js