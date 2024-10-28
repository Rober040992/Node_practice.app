'use strict';

function escribeTras2Segundos (texto, instruccionsParaDespues) {
    setTimeout(function () {
        console.log(texto);
        instruccionsParaDespues()
    }, 2000)
}

/* esto es un bucle que repite 5 veces
for (let n = 1; n < 5; n++){
    escribeTras2Segundos('texto1', function () {
        console.log('fin')
    })
}
*/


function bucleSerie(n, fn, callback) {
    if (n == 0) {
        //termino el bucle
        callback()
        return
    }
    n = n - 1
    fn('texto' + n, function () {
        //esto de aqui es llamar a la funcion a si misma , recursion
        bucleSerie(n, fn, callback)
    })

}


bucleSerie(5, escribeTras2Segundos, function () {
    console.log('fin')
})
