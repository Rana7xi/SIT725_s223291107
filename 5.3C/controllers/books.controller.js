const bookService = require('../services/books.service');

async function getAllBooks(req, res, next) {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({ 
      statusCode: 200, 
      data: books, 
      message: 'Books retrieved' });
  } catch (err) {
    next(err);
  }
}

async function getBookById(req, res, next) {
  try {
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    
    if (book) {
      res.status(200).json({ 
        statusCode: 200, 
        data: book, 
        message: 'Book retrieved' });
    } else {
      res.status(404).json({ 
        message: 'Book not found' 
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllBooks,
  getBookById,
};

