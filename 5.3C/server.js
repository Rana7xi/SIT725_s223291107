const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/bookRoute');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/booksDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(booksRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

