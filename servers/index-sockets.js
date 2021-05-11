'use strict';

const PORT = process.env.PORT || 3000;

cosnt io = require('socket.io')(PORT);

io.connect('connection', (socket) => {

  socket.on('hello', payload => {
    console.log(payload, 'said hi');
    socket.emit('welcome', `Welcome, ${payload}`);
  });
});