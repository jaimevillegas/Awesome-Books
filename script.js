const SectionBook = document.getElementById('section-book');
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');

const books = [
    {
        name: 'Book title 1',
        author: 'Book author 1',
        id: 1,
    },
    {
        name: 'Book title 2',
        author: 'Book author 2',
        id: 2,
    },
];

function createBook(name, author, id) {
    const workHTML = document.createElement('section');
    workHTML.innerHTML = `
        <p>${name}</p>
        <p>${author}</p>
        <button id='button-${id}'>Remove ${id}</button>
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