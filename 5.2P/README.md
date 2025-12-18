# Books Catalog MVC Application

A simple Node.js + Express MVC application for displaying a books catalog.

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000`

## Endpoints

- `GET /` - Serves the main HTML page
- `GET /api/books` - Returns all books as JSON
- `GET /api/books/:id` - Returns a specific book by ID (e.g., `/api/books/b2`)

## Architecture

This application follows the MVC (Model-View-Controller) pattern:

- **Routes** (`/routes/books.routes.js`) - Define API endpoints
- **Controllers** (`/controllers/books.controller.js`) - Handle business logic and HTTP responses
- **Services** (`/services/books.service.js`) - Handle data access (in-memory storage)
- **Public** (`/public/index.html`) - Client-side HTML/JavaScript for displaying books

The application is read-only and displays a catalog of 5 books with their titles and authors.

