const socketio = require('socket.io');

const clients = [];


module.exports.listen = (app) => {
  const io = socketio.listen(app);
  io.on('connection', (socket) => {
    let currentUser;
    socket.on('USER_CONNECTED', () => {
      console.log('New User connected');
      socket.emit('USER_CONNECTED');
    });

    socket.on('PLAY', (data) => {
      currentUser = {
        name: data.username,
      };
      clients.push(currentUser);
      io.sockets.emit('PLAY', currentUser);
      console.log(`User ${currentUser.name} connected`);
    });
    // eslint-disable-next-line global-require
    require('./chat_message.js')(socket);
    socket.on('DISCONNECT', () => {
      console.log('User disconnected');
      socket.broadcast.emit('USER_DISCONNECTED', currentUser);
      if (typeof currentUser.name !== 'undefined') {
        for (let i = 0; i < clients.length; i += 1) {
          if (clients[i].name === currentUser.name) {
            console.log(`User ${clients[i].name} disconnected`);
            clients.splice(i, 1);
          }
        } 
}
    });
  });


  return io;
};
