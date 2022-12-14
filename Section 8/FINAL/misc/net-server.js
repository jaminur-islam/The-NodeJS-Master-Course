/*
 * Example TCP (Net) Server
 * Listens to port 6000 and sends the word "pong" to clients
 *
 */

/* // Dependencies
var net = require("net");

// Create the server
var server = net.createServer(function (connection) {
  // Send the word "pong"
  var outboundMessage = "server";
  connection.write(outboundMessage);

  // When the client writes something, log it out
  connection.on("data", function (inboundMessage) {
    var messageString = inboundMessage.toString();
    console.log(
      "I wrote " + outboundMessage + " and they said " + messageString
    );
  });
});

// Listen
server.listen(6000);

 */
const net = require("net");
const server = net.createServer((connection) => {
  const serverMessage = "server side message";
  connection.write(serverMessage);

  connection.on("data", (clientMessage) => {
    const convertClientMessage = clientMessage.toString();
    console.log(convertClientMessage);
  });
});

server.listen(7000);
