const express = require("express");

const app = express();

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("API Running...");
});

module.exports = app;