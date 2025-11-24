const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

//  list of books
const books = [
  {
    id: 1,
    title: 'Learning JavaScript',
    author: 'Rana Al-Shahrani',
    year: 2023,
    coverImage: '/images/book1.jpg',
    description: 'An introductory guide to JavaScript for web development.'
  },
  {
    id: 2,
    title: 'Introduction to Databases',
    author: 'Naif Alshahrani',
    year: 2022,
    coverImage: '/images/book2.jpg',
    description: 'Learn the basics of SQL and relational databases.'
  },
  {
    id: 3,
    title: 'Web Design with HTML & CSS',
    author: 'Turki Saad',
    year: 2021,
    coverImage: '/images/book3.jpg',
    description: 'Design modern websites using HTML, CSS and UI frameworks.'
  }
];


// Rest Get point
app.get('/api/books', (req, res) => {
  res.json(books);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
