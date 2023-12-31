const express = require('express');
const http = require('http');
const soketIO = require('socket.io');
const Moniker = require('moniker');

const app = express();
const server = http.Server(app);
const PORT = 3333;
const io = soketIO(server);

app.use(express.json());
app.use(express.static('./client'));

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  socket.username = Moniker.choose();
  socket.emit('set username', socket.username);
  socket.broadcast.emit('user joined', socket.username);
  
  socket.on('disconnect', () => {
    socket.broadcast.emit('user left', socket.username);
  });

  socket.on('chat message', message => {
    io.emit('chat message', {
      name: socket.username,
      message,
    })
    console.log({message});
  });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));