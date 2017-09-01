/* https://nodejs.org/api
 1. learn path
 2. install express
 3. deploy to Heroku => set 'engines' inside package.json
 4. create socket IO -> sudo npm i socket.io@latest --save
    install Pretty Beautiful javascript to Chrome
    http://localhost:3000/socket.io/socket.io.js
    https://socket.io/docs/server-api/#event-connect
*/
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

console.log(__dirname + '/public');
console.log(publicPath);

var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// server side
io.on('connection', socket => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User is disconnected');
  });
});

//use socket io
server.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
/* without using socket.io
app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
*/
