const net = require('net');

const server = net.createServer((socket) => {
  console.log('connect11');
  socket.on('data', (chunk) => {
    // console.log('chunk', chunk.toString());
    // socket.write('server:hello');
    socket.end('unconnect');
  });

  socket.on('end', () => {
    console.log('client close');
  });
});
server.on('error', (error) => {
  console.log('error', error);
});
server.listen(8080);
