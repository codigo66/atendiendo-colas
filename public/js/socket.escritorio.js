var socket = io();
var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location.href = 'index.html';
    throw new Error('Es escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', ({ escritorio: escritorio }), function(resp) {

        if (resp === "No hay más tickets") {
            $('span').text('ticket ' + resp);
            return;
        }
        $('span').text('ticket ' + resp.numero);
    });
});