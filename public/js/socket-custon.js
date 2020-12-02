var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Bryan',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta serer: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});