import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import * as homeController from './controllers/homeControllers.js'

const app = express()

app.locals.appName = 'Nodeapp!!!'
app.set('views', 'views') // views folder
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json()) //parsear el body a formato json y que nos valga el postman o thunderclient
app.use(express.urlencoded()) //para parsear el body que venga encoded (para)
app.use(express.static('public'))

/**
 * Application routes
 */
app.get('/', homeController.index)
app.get('/param_in_route/:num?', homeController.paranInRouteExample)

app.post('/create-example', homeController.createExample)


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
    //set locals
    res.locals.message = err.message
    res.locals.error = process.env.NODEAPP_ENV === 'developement' ? err : {}
    //remder error view
    res.render(error)
})

export default app