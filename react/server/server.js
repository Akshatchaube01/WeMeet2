const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const waitingUsers = [];

io.on('connection', (socket) => {
  console.log('New user connected');

  if (waitingUsers.length > 0) {
    const partner = waitingUsers.pop();
    socket.partner = partner;
    partner.partner = socket;

    socket.emit('chat partner', partner.id);
    partner.emit('chat partner', socket.id);
  } else {
    waitingUsers.push(socket);
  }

  socket.on('chat message', (msg) => {
    if (socket.partner) {
      socket.partner.emit('chat message', msg);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    const index = waitingUsers.indexOf(socket);
    if (index > -1) {
      waitingUsers.splice(index, 1);
    }
    if (socket.partner) {
      socket.partner.partner = null;
      socket.partner.emit('chat partner', null);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});