
let myLibrary = [];
var addBook = document.getElementById("addBtn");


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

    var br = document.createElement("br")

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

    var submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Submit")

    form.appendChild(title);
    form.appendChild(br.cloneNode())
    form.appendChild(author);
    form.appendChild(br.cloneNode())
    form.appendChild(pages);
    form.appendChild(br.cloneNode())
    form.appendChild(read);
    form.appendChild(br.cloneNode())
    form.appendChild(submit)

    

    document.getElementById("myLibrary").appendChild(form);
    

}

addBook.addEventListener('click', () => {
    addTheBook()
})



// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

// myLibrary.push(theHobbit)

