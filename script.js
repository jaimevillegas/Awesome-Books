/* eslint-disable no-unused-vars */
const SectionBook = document.getElementById('section-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');
const textDate = document.getElementById('date');

class Book {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
  
  static books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
  
  
  addNewBook() {
    Book.books.push(this);
    localStorage.setItem('books', JSON.stringify(Book.books));
    bookTitle.value = '';
    bookAuthor.value = '';
    this.updateList();
  }
  
  removeBook(id) {
    Book.books = Book.books.filter((book) => book.id !== +id);
    localStorage.setItem('books', JSON.stringify(Book.books));
    this.updateList();
  }

  showDate() {
    const date = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date).replace(/,/g, '');

    textDate.innerHTML = formattedDate;
  }
  
  updateList() {
    this.showDate();
    SectionBook.innerHTML = '';
    Book.books.forEach((book) => {
      SectionBook.insertAdjacentHTML('beforeend', `
      <article class='book-item'>
      <p>${book.name}</p>
      <span> by </span>
      <p>${book.author}</p>
      <button class='remove-book btn' data-id='${book.id}'>Remove</button>
      </article>
      `);
    });

    const removeBookBtn = document.querySelectorAll('.remove-book');

    removeBookBtn.forEach((button) => button.addEventListener('click', (e) => {
      this.removeBook(e.target.dataset.id);
    }));
  }
}


new Book().updateList();

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    Math.floor((Math.random() * Date.now())), bookTitle.value, bookAuthor.value,
  );
  newBook.addNewBook();
});



