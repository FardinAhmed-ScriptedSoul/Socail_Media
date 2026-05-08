const express = require('express');
const router = express.Router();
const multer = require('multer');
const postController = require('../controllers/post.controller.js');

// Multer configuration stays in the routes or a middleware file
const upload = multer({ storage: multer.memoryStorage() });

// These are now relative to the /posts prefix
router.post('/create', upload.single('image'), postController.createPost); // -> /posts/create
router.get('/view', postController.getAllPosts);                           // -> /posts/view

module.exports = router;