/*
 * Example UDP Client
 * Sending a message to a UDP server on port 6000
 *
 */

/* // Dependencies
var dgram = require("dgram");

// Create the client
var client = dgram.createSocket("udp4");

// Define the message and pull it into a buffer
var messageString = "This is a message";
var messageBuffer = Buffer.from(messageString);

// Send the message
client.send(messageBuffer, 5000, "localhost", function (err) {
  client.close();
}); */

/* const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const message = "My message";
const messageBuffer = Buffer.from(message);

client.send(messageBuffer, 5000, "localhost", function (err) {
  client.close();
}); */

const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const message = "My new message";
const messageBuffer = Buffer.from(message);

client.send(messageBuffer, 5000, "localhost", (e) => {
  console.log(e);
  client.close();
});
