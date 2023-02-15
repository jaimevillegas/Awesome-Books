/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const SectionBook = document.getElementById('section-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');
const textDate = document.getElementById('date');

const bookListSection = document.getElementById('books-list-section');
const addBookSection = document.getElementById('add-book-section');
const contactSection = document.getElementById('contact-section');
const linkList = document.getElementById('link-list');
const linkNew = document.getElementById('link-new');
const linkContact = document.getElementById('link-contact');

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
    const options = {
      month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true,
    };
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

window.addEventListener('load', () => {
  bookListSection.style.display = 'block';
});

linkList.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

linkNew.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
});

linkContact.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
});
