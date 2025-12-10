const bookService = require('../services/books.service');

function getAllBooks(req, res, next) {
  const books = bookService.getAllBooks();
  res.status(200).json({ statusCode: 200, data: books, message: 'Books retrieved successfully' });
}

function getBookById(req, res, next) {
  const id = req.params.id;
  const book = bookService.getBookById(id);
  
  if (book) {
    res.status(200).json({ statusCode: 200, data: book, message: 'Book retrieved successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
};

