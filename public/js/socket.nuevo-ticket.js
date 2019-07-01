// Establece la conexión
var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado');
});
socket.on('disconnect', function() {
    console.log('Desconectado');
});

// Útimo ticket
socket.on('estadoActual', function(ticket) {
    $("#lblNuevoTicket").html(ticket.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(ticket) {
        $("#lblNuevoTicket").html(ticket);
    });
});