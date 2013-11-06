var socket = io.connect('http://localhost:8000');

socket.on('connect', function(data){
    nickname = prompt("What is your name?");
    socket.emit('join', nickname);
});

$('#chat-form').submit(function(e){
    e.preventDefault();
    var message = $('#chat-input').val();
    socket.emit('messages', message);
    $('#messages-pane').append('<p>' + nickname + ": " + message + '</p>');
    $('#messages-pane')[0].scrollTop = $('#messages-pane')[0].scrollHeight;
    $('#chat-input').val('');
});


socket.on('new message', function(data){
    $('#messages-pane').append('<p>' + data + '</p>');
    $('#messages-pane')[0].scrollTop = $('#messages-pane')[0].scrollHeight;
});
