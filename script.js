// UI links


var addBook = document.getElementById("addBtn");
var logIn = document.getElementById("logIn");
var bookContainer = document.getElementById("bookCards");
var modal = document.getElementById('modal');
var logInModal = document.getElementById('logInModal')
var spain = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById('submit');

// event listeners 


addBook.onclick = function() {
    modal.style.display = "block";
}

spain.onclick = function() {
    modal.style.display = "none";
}

logIn.onclick = function() {
    logInModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == logInModal) {
      logInModal.style.display = "none";
    }
}

// Library logic 


let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
const meli = new Book("Mel Incognito", "Mel", "33", "has read")

myLibrary.push(theHobbit)
myLibrary.push(meli)




function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        print(title + ", by " + author + ", is " + pages + " pages long, this book is " + read);
    }
    
}

// display logic 

function addToBookLibrary(addNewBook) {
    new Book(title, author, pages, read);
    myLibrary.push(addNewBook);
}

function removeBook(book) {
    const index = myLibrary.indexOf(book)
    
}


Book.prototype.makeCard = function() {
    const bookCard = document.createElement('div');
    const deleteBtn = document.createElement('button')
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    
    bookCard.classList.add("bookCard");
    deleteBtn.classList.add("dltBtn")
    title.textContent = `Title: ${this.title}`;
    author.textContent = `Author: ${this.author}`;
    pages.textContent = `${this.pages} pages long`;
    deleteBtn.textContent = 'delete book';

    deleteBtn.addEventListener('click', () => {
        bookContainer.removeChild(bookCard)

    })

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(deleteBtn)
    bookContainer.appendChild(bookCard);
}

myLibrary.forEach((Book) => {
    Book.makeCard();
});



