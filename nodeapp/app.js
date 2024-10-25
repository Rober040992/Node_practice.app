import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeControllers.js'

const app = express()

app.locals.appName = 'Nodeapp!!!'
app.set('views', 'views') // views folder
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.static('public'))

/**
 * Application routes
 */
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

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send('Ocurrió un error: ' + err.message)
})

export default app