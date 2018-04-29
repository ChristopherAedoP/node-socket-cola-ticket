var socket = io();
var lblticket1 = $('#lblTicket1');
var lblticket2 = $('#lblTicket2');
var lblticket3 = $('#lblTicket3');
var lblticket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblticket1, lblticket2, lblticket3, lblticket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4]

function actualizatHTML(ultimos4) {

    for (var i = 0; i < ultimos4.length; i++) {
        lblTickets[i].text(`Ticket ${ultimos4[i].numero}`)
        lblEscritorios[i].text(`Escritorio ${ultimos4[i].escritorio}`)
    }

}

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(data) {
    actualizatHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizatHTML(data.ultimos4);
});