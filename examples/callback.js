function suma (a,b, callback) {
    const resultado = a + b
    callback(resultado)
}
suma(4,3, function (resultado) {console.log('sumado', resultado)})
