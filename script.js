const SectionBook = document.getElementById('section-book');
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');

const books = [
    {
        name: 'Book title 1',
        author: 'Book author 1',
        id: 0,
    },
    {
        name: 'Book title 2',
        author: 'Book author 2',
        id: 1,
    },
];

function createBook(name, author, id) {
    const workHTML = document.createElement('section');
    workHTML.innerHTML = `
        <p>${name}</p>
        <p>${author}</p>
        <button id='button-${id}' onclick='getRemoveBook(${id})' class='remove-book'>Remove ${id}</button>
        <hr>
    `;
    SectionBook.appendChild(workHTML);
}

window.addEventListener('load', (() => {
    SectionBook.innerHTML = '';
    books.forEach((book) => {
        createBook(book.name, book.author, book.id);
    });
}));

function getRemoveBook(id) {
  let newBooks = books.forEach((book) => {
    if (book.id === id) {
      console.log(book.id);
      delete books[id];
      console.log(books);
      SectionBook.innerHTML = '';
      books.forEach((book) => {
          createBook(book.name, book.author, book.id);
      });
    }
    // console.log(book.id);
    // return book.id == id;
  });
  // console.log('Hello from getRemoveBooks');
  // console.log(id);
  // console.log(newBooks);
};

// const removedBook = document.getElementById(`book-${id}`);
// removedBook.addEventListener('click', getRemoveBook);
console.log("hello");

// const removeBook = document.getElementsByClassName('remove-book');

// removeBook.addEventListener('click', (e) => {
//   e.preventDefault();
// })

