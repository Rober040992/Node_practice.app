3 estructura de una aplicación: MVC

# 3 estructurar una aplicación:
- vamos a seguir el modelo vista controlador MVC (https://developer.mozilla.org/es/docs/Glossary/MVC)
1. _CADA UNO EN SU SITIO!_
- si no lo tenemos creamos fichero app.js
- y nos llevamos del _server.js_ el _import express_, su _const app_ y el _app.get_ 
- exportamos app.js
	- abajo del todo _export default app_
- en server.js creamos _import app from './app.js'_
2. creamos error handler
	2.1 primero los __errores customizados__:
- error customizado:
```JavaScript
	app.get('/custom', (req, res, next) => {
    res.send('aquí la respuesta del error')
})
	2.2 segundo el __404__
- creamos error _404 not found_ usando librería createError
	-instalamos: npm i http-errors
	- import createError from 'http-errors' 

```JavaScript
	app.use((req, res, next) => {
    next(createError(404))
})
```
	2.3 tercero este es el __error 500__ para errores que el server no puede detectar

```JavaScript
	app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send('Ocurrió un error: ' + err.message)
})
```

nunca usamos res.send('') mas next() en el mismo middleware o responder varias veces, esto da un error en consola => cannot ser headers…… 
