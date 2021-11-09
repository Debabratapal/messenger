const express = require("express");
const socket = require("socket.io");
// const cors = require("cors");

// App setup
const PORT = 5000;
const app = express();

app.use(function (req, res, next) {
  console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Socket setup
const io = socket(server, {
  cors: {
    origin:'http://localhost:3000'
  }
});

const activeUser = [];

io.on("connection", function (socket) {
  console.log("Made socket connection");
  socket.on("disconnect", () => {
    console.log("user left");
  });
  socket.on("join", (data) => {
    console.log(data);
  });
});
