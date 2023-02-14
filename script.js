const SectionBook = document.getElementById('section-book');
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');

let fromLocal = JSON.parse(window.localStorage.getItem('bookData'));
let books = fromLocal === null ? [] : fromLocal;

function createBook(name, author, id) {
    const workHTML = document.createElement('section');
    workHTML.innerHTML = `
        <p>${name}</p>
        <p>${author}</p>
        <button id='button-${id}' onclick='removeBook(${id})' class='remove-book'>Remove</button>
        <hr>
    `;
    SectionBook.appendChild(workHTML);
    window.localStorage.setItem('bookData', JSON.stringify(books));
}

window.addEventListener('load', (() => {
  SectionBook.innerHTML = '';
  books.forEach((book) => {
      createBook(book.name, book.author, book.id);
  });
}));

function reRenderBook() {
  SectionBook.innerHTML = '';
  books.forEach((book) => {
    createBook(book.name, book.author, book.id);
  });
}

function addNewBook(name, author, id) {
    const addedBook = {
      name: name,
      author: author,
      id: id
    };
    books.push(addedBook);
    reRenderBook();
}

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    let idNumber = Date.now();
    addNewBook(bookTitle.value, bookAuthor.value, idNumber)
})

function removeBook(id) {
  let newBook = books.filter(book => {
    return book.id !== id;
  })
  books = newBook;
  reRenderBook();
  window.localStorage.setItem('bookData', JSON.stringify(books));
};