const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const setupSocket = require('./socket'); // 🔧 fixed this line

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

setupSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
