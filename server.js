const mongoose = require('mongoose');
const logger = require('morgan');
// Requring all of our nessesary packages
const express = require("express");
const routes = require('./routes')
// Setting up our port
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));

// This allows us to recognize the incoming event's as json object. 
app.use(express.json());
app.use(logger('dev'));

// Used to load the files that are in the directory public and recognizes them as static.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JERONIVOSH");

// requring our routes
app.use(routes);


// listening for our ports
// app.listen(PORT, function () {
//   console.log(
//     "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//     PORT,
//     PORT
//   );
// });
const http = require("http");
// set up sockets
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket=>{
  console.log("Client Connected");
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};
