document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/books')
    .then(response => response.json())
    .then(books => {
      const container = document.getElementById('books-row');

      books.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col s12 m6 l4';

        col.innerHTML = `
          <div class="card hoverable">
            <div class="card-image">
              <img src="${book.coverImage}" alt="${book.title}">
              <span class="card-title">${book.title}</span>
            </div>
            <div class="card-content">
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Year:</strong> ${book.year}</p>
              <p>${book.description}</p>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    })
    .catch(err => {
      console.error('Error fetching books:', err);
    });
});
