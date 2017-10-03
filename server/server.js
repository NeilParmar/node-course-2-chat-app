const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

//Emits an event to a single connection-
  // socket.emit('newMessage',{
  //   from: 'Andrew',
  //   text: 'Hey! can you meet up at six',
  //   createdAt: 123
  // });

//Emits an event to all the connection-
  socket.on('createMessage', (newMessage) => {
    console.log('createMessage',newMessage);
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
