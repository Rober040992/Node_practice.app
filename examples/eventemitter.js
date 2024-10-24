'use strict';

const EventEmitter = require('node:events');

const emisor = new EventEmitter();

emisor.on('llamada de telefono', function () {
    console.log('ring ring')
})

emisor.once('llamada de telefono', function () {
    console.log('brr brr')
})

emisor.emit('llamada de telefono')
emisor.emit('llamada de telefono')
emisor.emit('llamada de telefono')

/*
Explicación de los métodos clave:
1- on(evento, callback): Se usa para registrar un oyente de un evento. La función callback será ejecutada cada vez que el evento especificado sea emitido.
2- emit(evento, [args...]): Se usa para emitir (generar) un evento. Todos los oyentes registrados para ese evento se ejecutarán en el orden en que fueron registrados, recibiendo los argumentos opcionales pasados.
3- removeListener(evento, listener): Elimina un oyente registrado previamente para un evento específico.
4- once(evento, callback): Registra un oyente que será llamado solo la primera vez que el evento se emita, y luego se removerá automáticamente.
*/