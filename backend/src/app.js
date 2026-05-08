
const express = require("express");
const postRoutes = require('./routes/post.routes.js');
const cors = require("cors");
const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable for all origins (Standard for development)
// Basic Health Check Route
app.get("/", (req, res) => {
    res.send("Server is healthy!");
});

// Mount Routes
// You can prefix them with /api or /v1 if you want to be fancy
app.use('/posts', postRoutes); 

module.exports = app;