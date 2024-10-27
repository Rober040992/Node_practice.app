//funcion cronometro de guille

import { createServer } from 'node:http'

function showOne(callback, index = 0, step = 1, limit = 5, PORT = 8000) {
    setTimeout(function () {
        console.clear()
        if (index < limit) {
            index = index + step
            callback(index)
            showOne(callback, index)
        } else {
            console.log(`After ${index} seconds`)
            server.listen(PORT)
            console.log(`Server running at http://localhost:${PORT}/`)
        }
    }, step * 1000)
}

const server = createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })

    response.end('Hello world')
})

showOne(function (number) {
    console.log(number)
})