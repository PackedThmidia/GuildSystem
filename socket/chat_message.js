module.exports = function(socket){
    var msg = {
        playerName: currentUser.name,
        message: data.message,
        timestamp: data.timestamp
      }
      //socket.emit("chat_message", currentUser);
      socket.broadcast.emit("chat_message", msg);
      console.log(currentUser.name + " send message: " + data.message);
}