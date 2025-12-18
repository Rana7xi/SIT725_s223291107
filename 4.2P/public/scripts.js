document.addEventListener('DOMContentLoaded', () => {
  // Call API to get all books
  fetch('/api/books')
    .then((response) => response.json())
    .then((books) => {
      const container = document.getElementById('bookCards');
      container.innerHTML = '';

      books.forEach((book) => {
        const col = document.createElement('div');
        col.className = 'col s8 m4';

        col.innerHTML = `
          <div class="card hoverable">
            <div class="card-image">
              <img src="${book.imageUrl || 'book image'}" />
              <span class="card-title">${book.title}</span>
            </div>
            <div class="card-content">
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Year:</strong> ${book.year}</p>
              <p><strong>Genre:</strong> ${book.genre}</p>
              <p><strong>Pages:</strong> ${book.pages}</p>
              <p><strong>Rating:</strong> ${book.rating}</p>
              <p>${book.description}</p>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    })
    .catch((err) => {
      console.error('Error fetching books:', err);
    });
});
