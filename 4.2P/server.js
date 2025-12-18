const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to mongoDB 
mongoose
  .connect('mongodb://127.0.0.1:27017/sit725_book_library')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Db connection error:', err));


//  book model
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  genre: String,
  pages: Number,
  rating: Number,
  imageUrl: String,
  description: String,
});

const Book = mongoose.model('Book', bookSchema);

app.use(express.static(path.join(__dirname, 'public')));

// endpoint to return books from the database
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).json({ error: 'Server error fetching books' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
