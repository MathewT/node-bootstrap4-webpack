'use strict';
const path = require('path');
const fs = require('fs');
const http = require('http');
const socketIO = require('socket.io');
const os = require('os');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const logo = '\
';

console.log('hello world');

const publicPath = path.join(__dirname, "../dist");

console.log(publicPath);

// App
const app = express();
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);


// app.get('/', (req, res) => {
//   console.log("get /");
//   res.send(`Hello server world\n\n`);
// });

let user = os.userInfo();
// console.log(user);
io.on('connection', function (socket) {
  console.log('socket to me!');
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

console.log('this should happen down there...');

server.listen(PORT, HOST, () => {
  console.log("Server is up and running.");
});
