// UI links


var addBook = document.getElementById("addBtn");
var logIn = document.getElementById("logIn");
var bookContainer = document.getElementById("bookCards");
var modal = document.getElementById('modal');
var logInModal = document.getElementById('logInModal')
var spain = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById('submit');

class Book {
    constructor( 
        title = 'Unknown', 
        author = 'Unknown', 
        pages = '0',
    ) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
    }
} 


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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295")
const meli = new Book("Mel Incognito", "Mel", "33")
const ari = new Book("The Great Puta", "Me", "69")
const mel = new Book("Ari Gato", "Bella", "32")


myLibrary.push(theHobbit)
myLibrary.push(meli)
myLibrary.push(ari)
myLibrary.push(mel)

const subBtn = document.getElementById('submit')


function addBookToLibrary() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    return new Book(title, author, pages);
    
}

subBtn.addEventListener('click', (e) => {
    addBookToLibrary();

})


// display logic 



//function addToBookLibrary(addNewBook) {
//    new Book(title, author, pages);
//    myLibrary.push(addNewBook);
// }


Book.prototype.makeCard = function() {
    const bookCard = document.createElement('div');
    const deleteBtn = document.createElement('button')
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const hasRead = document.createElement('input')
    const hasReadLabel = document.createElement('label')

    
    bookCard.classList.add("bookCard");
    deleteBtn.classList.add("dltBtn")
    hasReadLabel.classList.add("finishedTxt")
    
   

    title.textContent = `Title: ${this.title}`;
    author.textContent = `Author: ${this.author}`;
    pages.textContent = `${this.pages} pages long`;
    hasRead.type = 'checkbox';
    hasReadLabel.textContent = 'Finished reading?'
    deleteBtn.textContent = 'delete book';

    
    


    deleteBtn.addEventListener('click', () => {
        bookContainer.removeChild(bookCard);

    })

   

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(hasRead);
    bookCard.appendChild(hasReadLabel);
    bookCard.appendChild(deleteBtn);
    bookContainer.appendChild(bookCard);
}


myLibrary.forEach((Book) => {
    Book.makeCard();
});



