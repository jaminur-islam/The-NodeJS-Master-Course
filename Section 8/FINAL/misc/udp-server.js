/*
 * Example UDP Server
 * Creating a UDP datagram server and listening on 6000
 *
 */

/* // Dependencies
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message',function(messageBuffer,sender){
  // Do something with an incoming message or the sender
  var messageString = messageBuffer.toString();
  console.log(messageString);
});

// Bind to 6000
server.bind(6000); */

/* const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("message", function (messageBuffer, sender, kk, callback) {
  const messageString = messageBuffer.toString();
  console.log(messageString, sender, kk, callback);
});

server.bind(5000); */

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("message", (message, sender) => {
  console.log(message.toString());
  console.log(sender);
});

server.bind(5000);
