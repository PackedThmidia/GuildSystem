// var express = require('express');
// var app = express();

// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);

// app.set('port', process.env.PORT || 3000);

// var clients = [];

/* io.on("connection", function(socket){

  var currentUser;
  socket.on("user_connected", function(){
    console.log("User connected");
    for(var i = 0; i < clients.length; i++){
      socket.emit("user_connected", { name:clients[i].name});
      console.log("User name " + clients[i].name + "is connected");
    }
  });

  socket.on("play", function(data){
    currentUser = {
      name:data.playerName,
    }
    clients.push(currentUser);
    socket.emit("play", currentUser);
    socket.broadcast.emit("play", currentUser);
    console.log("User " + currentUser.name + " connected");

  });

  socket.on("chat_message", require("./controllers/socket/chat_message.js")(socket));

  socket.on("disconnect", function(){
    socket.broadcast.emit("USER_DISCONNECTED", currentUser);
    for(var i = 0; i < clients.length; i++){
      if(clients[i].name === currentUser.name){
        console.log("User " + clients[i].name + " disconnected");
        clients.splice(i, 1);
      }
    }
  });
}) */

// server.listen(app.get('port'), function() {
//     console.log("--------- SERVER IS RUNNING");
// });
