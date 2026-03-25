const express = require("express");

const app = express(); //server created

app.get("/", (req, res) => {
  //server is programmed to send response
  res.send("Hello World");
});

app.listen(5000); //server start
