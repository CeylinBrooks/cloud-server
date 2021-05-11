'use strict';

const io = require('socket.io-client');

const server = 'http://nodeservertest';

const socket = io.connect(server);

socket.on('welcome', payload => console.log(payload));

socket.emit('hello', 'world');