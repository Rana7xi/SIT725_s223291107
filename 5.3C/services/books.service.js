const Book = require('../models/bookModel');

async function getAllBooks() {
  return Book.find({}).lean({ getters: true });
}

async function getBookById(id) {
  return Book.findOne({ id: id }).lean({ getters: true });
}

module.exports = { getAllBooks, getBookById };

