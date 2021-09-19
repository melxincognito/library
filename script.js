
var addBook = document.getElementById("addBtn");
var logIn = document.getElementById("logIn")
var bookContainer = document.getElementById("bookCards");
var modal = document.getElementById('modal');
var logInModal = document.getElementById('logInModal')
var spain = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById('submit')

let myLibrary = [];

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
        print(title + ", by " + author + ", is " + pages + " pages long, this book is " + read)
    }
    
}


function addToBookLibrary(addNewBook) {
    new Book(title, author, pages, read);
    myLibrary.push(addNewBook);
}


Book.prototype.makeCard = function() {
    const bookCard = document.createElement('div');

    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    
    bookCard.classList.add("bookCard");
    title.innerHTML = `${this.title}`;
    author.textContent = `${this.author}`;
    pages.textContent = `${this.pages} pages`;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookContainer.appendChild(bookCard)
}

myLibrary.forEach((Book) => {
    Book.makeCard()
})



