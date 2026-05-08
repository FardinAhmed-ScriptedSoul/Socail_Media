const express = require('express');
const router = express.Router();
const multer = require('multer');
const postController = require('../controllers/post.controller.js');

// Multer configuration stays in the routes or a middleware file
const upload = multer({ storage: multer.memoryStorage() });

// POST route
router.post('/create-post', upload.single('image'), postController.createPost);

// GET route
router.get('/posts', postController.getAllPosts);

module.exports = router;