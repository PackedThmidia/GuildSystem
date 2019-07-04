module.exports = (socket) => {
  socket.on('CHAT_MESSAGE', (data) => {
    const msg = {
      playerName: data.username,
      message: data.message,
      timestamp: data.timestamp,
    };
    socket.broadcast.emit('CHAT_MESSAGE', msg);
    console.log(`${socket.username} send message: ${data.message}`);
  });
};
