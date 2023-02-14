/* eslint-disable no-unused-vars */
const SectionBook = document.getElementById('section-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');

let books = [];

function createBook(name, author) {
  const workHTML = document.createElement('section');
  workHTML.innerHTML = `
        <p>${name}</p>
        <p>${author}</p>
        <button onclick="removeBook('${name}')">Remove</button>
        <hr>
    `;
  SectionBook.appendChild(workHTML);
}

function BookObject(name, author) {
  this.name = name;
  this.author = author;
}

function updateList() {
  SectionBook.innerHTML = '';
  books.forEach((book) => {
    createBook(book.name, book.author);
  });
}

function addNewBook(n, a) {
  const bookObj = new BookObject(n, a);
  books.push(bookObj);
  updateList();
}

function removeBook(title) {
  books = books.filter((book) => book.name !== title);
  localStorage.books = JSON.stringify(books);
  updateList();
}

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBook(bookTitle.value, bookAuthor.value);
  localStorage.books = JSON.stringify(books);
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('load', (() => {
  SectionBook.innerHTML = '';
  if (localStorage.books) {
    books = JSON.parse(localStorage.books);
  }
  books.forEach((book) => {
    createBook(book.name, book.author);
  });
}));