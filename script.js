// variables
const addBookbtnEl = document.getElementById('addBookBtn'),
      booksGridEl = document.getElementById('booksGrid'),
      addBookModalEl = document.getElementById('addBookModal'),
      formEl =  document.getElementById('addBookForm');
      


class Book {
    constructor(title = "unknown", author = "unknown", pages = 0, isRead = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBooks(newBook){
        if(!library.isInLibrary(newBook)){
            this.books.push(newBook);
            return true;
        }
        return false;
    }

    isInLibrary(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();


// utility functions
/* 
    const openAddBookModal = () => {
    formEl.reset();
    addBookModalEl.classList.add('active');

    formEl.addEventListener('submit', createBook);

} 

*/

add
const closeAddBookModal = () => {
    addBookModalEl.classList.remove('active');
    errorMsgEl.classList.remove('active');
    errorMsgEl.textContent = "";
}

addBookbtnEl.addEventListener('click',openAddBookModal);

function createBook(event){
    event.preventDefault();
    titleEl = document.getElementById('title');
    authorEl=document.getElementById('author');
    pagesEl= document.getElementById('pages');
    errorMsgEl = document.getElementById('errorMsg');
    isReadEl = document.getElementById('isRead');

    const book = new Book(titleEl.value,authorEl.value,pagesEl.value,isReadEl.checked);
    if(!library.addBooks(book)){
        errorMsgEl.textContent ="The book already exits in your list";
        errorMsgEl.classList.add('active');
    }else{
        displayCards(book);
    }

   
   

}

function displayCards(book){
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGrp = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    /* adding classes */

    bookCard.classList.add('book-card');
    buttonGrp.classList.add('button-group');
    readBtn.classList.add('btn');
    removeBtn.classList.add('btn');


    title.textContent =`"${book.title}"`;
    author.textContent= `${book.author}`;
    pages.textContent=` ${book.pages}` ;

    if(book.isRead){
        readBtn.textContent ="Read";
        readBtn.classList.add('btn-light-green');
    }
    else{
        readBtn.textContent ="Not read";
        readBtn.classList.add('btn-light-red');
    }

    readBtn.addEventListener('click',() => {
        if(readBtn.classList.contains('btn-light-red')){
            readBtn.classList.remove('btn-light-red');
            readBtn.classList.add('btn-light-green');
            readBtn.textContent="Read";
        }
        else{
            readBtn.classList.remove('btn-light-green');
            readBtn.classList.add('btn-light-red');
            readBtn.textContent='Not Read'
        }
    })

    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
        bookCard.remove();
    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGrp.appendChild(readBtn);
    buttonGrp.appendChild(removeBtn);
    bookCard.appendChild(buttonGrp);
    booksGridEl.appendChild(bookCard);

    closeAddBookModal();
}