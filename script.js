
var divForm = document.getElementById("form")
var submitButton = document.getElementById("sbtn")

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
    this.info = function() {
        console.log(title + ", by " + author + ", is " + pages + " pages long, this book is " + read)
    }
    
}

function addToBookLibrary(addNewBook) {
    new Book(title, author, pages, read);
    myLibrary.push(addNewBook)
}


function addNewBook(title, author, pages, read) {
    var form = document.createElement("form");
    var addTitle = document.createElement("input");
    var addAuthor = document.createElement("input");
    var addPages = document.createElement("input");
    var hasRead = document.createElement("input");
    

    addTitle.value = title;
    addTitle.type = Text; 
    addTitle.name = "title";
    form.appendChild(addTitle);

    addAuthor.value = author;
    addAuthor.name = "author";
    form.appendChild(addAuthor);

    addPages.value = pages;
    addPages.name = "number of pages";
    form.appendChild(addPages)

    hasRead.value = read 
    hasRead.name = "have you read it? (Y/N)";
    form.appendChild(hasRead);

    divForm.appendChild(form)


} 




const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

myLibrary.push(theHobbit)




