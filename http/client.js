const net = require('net');
const socket = new net.Socket();

socket.connect(8080, 'localhost');
socket.on('connect', (data) => {
  socket.write('connect server');
});

socket.on('data', (chunk) => {
  console.log(chunk.toString());
});

socket.on('error', (error) => {
  console.log('error', error);
});
