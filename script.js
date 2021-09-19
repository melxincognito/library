
let myLibrary = [];
var addBook = document.getElementById("addBtn");
var bookContainer = document.getElementById("bookCards");
var modal = document.getElementById('modal');
var spain = document.getElementsByClassName("close")[0];


addBook.onclick = function() {
    modal.style.display = "block";
}

spain.onclick = function() {
    modal.style.display = "none";
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

myLibrary.push(theHobbit)

myLibrary.forEach(book => {
    JSON.stringify(myLibrary)
    bookContainer.innerHTML += book

})



function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        console.log(title + ", by " + author + ", is " + pages + " pages long, this book is " + read)
    }
    
}


function addToBookLibrary(addNewBook) {
    new Book(title, author, pages, read);
    myLibrary.push(addNewBook);
}







