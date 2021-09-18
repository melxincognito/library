


var addBook = document.getElementById("addBtn");

let myLibrary = [];

addBook.addEventListener('click', () => {
    addTheBook()
})


function createForm() {
    var forma = document.createElement("form");
    forma.setAttribute("method", "post");
    forma.setAttribute("action", "submit.php"); 

    var name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "FullName");
    name.setAttribute("placeholder", "Full Name");

    forma.appendChild(name)

    document.getElementsByTagName("body")[0].appendChild(forma)
}



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





function addTheBook(title, author, pages, read) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var title = document.createElement("input");
    title.setAttribute("title", "BookTitle");
    title.setAttribute("placeholder", "Book Title");

    var author = document.createElement("input");
    author.setAttribute("author", "BookAuthor");
    author.setAttribute("placeholder", "author");

    var pages = document.createElement("input");
    pages.setAttribute("pages", "PageNumber");
    pages.setAttribute("placeholder", "Number of pages")

    var read = document.createElement("input");
    read.setAttribute("read", "HasRead");
    read.setAttribute("placeholder", "Have you read it yet? (Y/N)");

    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(read);

    document.getElementById("myLibrary").appendChild(form);


}



// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

// myLibrary.push(theHobbit)




function openForm() {
    addNewBook().display("block")
}