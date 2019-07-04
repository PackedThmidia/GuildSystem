const socketio = require('socket.io');

let clients = [];

module.exports.listen = (app) => {
  const io = socketio.listen(app);
  io.on('connection', (socket) => {
    let currentUser;
    socket.on('USER_CONNECTED', () => {
      console.log('User connected');
      for (let i = 0; i < clients.length; i += 1) {
        socket.emit('USER_CONNECTED', { name: clients[i].name });
        console.log(`User name ${clients[i].name} is connected`);
      }
    });

    socket.on('PLAY', (data) => {
      currentUser = {
        name: data.playerName,
      };
      clients.push(currentUser);
      socket.emit('PLAY', currentUser);
      socket.broadcast.emit('PLAY', currentUser);
      console.log(`User ${currentUser.name} connected`);
    });

    require('./chat_message.js')(socket);

    socket.on('DISCONNECT', () => {
      socket.broadcast.emit('USER_DISCONNECTED', currentUser);
      for (let i = 0; i < clients.length; i += 1) {
        if (clients[i].name === currentUser.name) {
          console.log(`User ${clients[i].name} disconnected`);
          clients.splice(i, 1);
        }
      }
    });
  });


  return io;
};
