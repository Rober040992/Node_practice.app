import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeController.js'

const app = express()

app.set('views', 'views') //carpeta views
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.static('public'))

// Este fragmento define una ruta para manejar solicitudes HTTP GET a la raíz del servidor (/). Cuando alguien accede a la URL principal del servidor, el servidor responde con el mensaje "Hola". 
// req es el objeto de solicitud, res es la respuesta y next es un callback
// esto es un middleware / controlador

app.get('/', homeController.index)

app.get('/user', (req, res, next) => {
    console.log('petición a /user')
    next()
})

app.get('/user', (req, res, next) => {
    res.send('2222')
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
    // const err = new Error('404')
    // err.status = 404
    // next(err)
    next(createError(404))
})

//error handdler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send('Ups! ha ocurrido un error' + err.message)
})



export default app