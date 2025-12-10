const mongoose = require('mongoose');

//Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/sit725_book_library')
  .then(() => console.log('Connected to MongoDB (seed)'))
  .catch((err) => console.error('MongoDB connection error (seed):', err));


// book model
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

//Insert sample books
async function seedData() {
  try {
    await Book.deleteMany({}); // Clear any existing data

    await Book.insertMany([
      {
        title: 'Learning JavaScript',
        author: 'Rana Al-Shahrani',
        year: 2023,
        genre: 'Programming',
        pages: 250,
        rating: 4.5,
        imageUrl: 'images/book1.jpg',
        description: 'An introductory guide to JavaScript for web development.',
      },
      {
        title: 'Introduction to Databases',
        author: 'Naif Al-Shahrani',
        year: 2022,
        genre: 'Databases',
        pages: 320,
        rating: 4.7,
        imageUrl: 'images/book2.jpg',
        description: 'Basics of SQL and relational databases.',
      },
      {
        title: 'Web Design with HTML & CSS',
        author: 'Yunki Saad',
        year: 2021,
        genre: 'Web Design',
        pages: 280,
        rating: 4.2,
        imageUrl: 'images/book3.jpg',
        description: 'Practical web design using HTML5 and CSS3.',
      },
      {
        title: 'Cybersecurity Essentials',
        author: 'Alex Morgan',
        year: 2024,
        genre: 'Security',
        pages: 300,
        rating: 4.6,
        imageUrl: 'images/book4.jpg',
        description: 'Key concepts and best practices in cybersecurity.',
      },
      {
        title: 'AI for Beginners',
        author: 'Sara Khan',
        year: 2024,
        genre: 'Artificial Intelligence',
        pages: 260,
        rating: 4.8,
        imageUrl: 'images/book5.jpg',
        description: 'A gentle introduction to AI concepts and applications.',
      },
    ]);

  } catch (err) {
    console.error('Error in seeding data:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
