// Import the Express.js module
const express = require("express");

require("dotenv").config();

// Create an instance of the Express application
const app = express();
// The `app` variable represents your web application. You use it to define routes and other settings.

// Define the port number that the server will listen on
// const port = 3000;
// Just like a physical CPU has ports, here, we specify a virtual port for the server to listen on.

// Define a route for handling HTTP GET requests to the root path ('/')
app.get("/", (req, res) => {
  // When a GET request is made to '/', send the response 'Hello, Express!'
  res.send("Hello, Express!");
});

// Define a route for a hypothetical Twitter endpoint
app.get("/twitter", (req, res) => {
  res.send("prathamcom");
});

// Define a route for a login page
app.get("/login", (req, res) => {
  // Sending an HTML response
  res.send("<h1>Please login at Chai aur Code</h1>");
});

// Start the server and make it listen on the specified port
app.listen(process.env.PORT, () => {
  // Once the server is started, log a message to the console
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
