const express = require('express');
const router = express.Router();

// Import all controllers via index.js
const Controllers = require('../controllers');

router.get('/api/books', Controllers.booksController.getAllBooks);
router.get('/api/books/:id', Controllers.booksController.getBookById);

module.exports = router;

