const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hey world!");
});

module.exports = app;
