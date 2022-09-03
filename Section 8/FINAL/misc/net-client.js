/*
 * Example TCP (Net) client
 * Connects to port 6000 and sends the word "ping" to servers
 *
 */

// Dependencies
/* var net = require("net");

// Define the message to send
var outboundMessage = "client";

// Create the client
var client = net.createConnection({ port: 6000 }, function () {
  // Send the message
  client.write(outboundMessage);
});

// When the server writes back, log what it says then kill the client
client.on("data", function (inboundMessage) {
  var messageString = inboundMessage.toString();
  console.log("I wrote " + outboundMessage + " and they said " + messageString);
  client.end();
});
 */

const net = require("net");
const client = net.createConnection(
  { host: "192.168.0.105", port: 7000 },
  () => {
    const clientMessage = "client side message";
    client.write(clientMessage);
  }
);

client.on("data", (serverMessage) => {
  const convertServerMessage = serverMessage.toString();
  console.log(convertServerMessage);
  client.end;
});
