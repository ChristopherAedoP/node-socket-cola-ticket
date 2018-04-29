var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(data) {
    label.text(data.actual);
});

$('button').on('click', function(params) {

    // Enviar información
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

})