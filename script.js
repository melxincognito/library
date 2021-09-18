
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




function addNewBook(title, author, pages, read) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var br = document.createElement("br")

    var title = document.createElement("input");
    title.setAttribute("title", "title");
    title.setAttribute("placeholder", "Book Title");

    var author = document.createElement("input");
    author.setAttribute("author", "author");
    author.setAttribute("placeholder", "author");

    var pages = document.createElement("input");
    pages.setAttribute("pages", "pages");
    pages.setAttribute("placeholder", "Number of pages")

    var read = document.createElement("input");
    read.type = "checkbox";
    read.id = "read"

    var label = document.createElement('label');
    label.htmlFor = "read";
    label.appendChild(document.createTextNode("Have you read it?"))


    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
   

    form.appendChild(title);
    form.appendChild(br.cloneNode());
    form.appendChild(author);
    form.appendChild(br.cloneNode());
    form.appendChild(pages);
    form.appendChild(br.cloneNode());
    form.appendChild(read);
    form.appendChild(label)
    form.appendChild(br.cloneNode());
    form.appendChild(submit);


    document.getElementById("myLibrary").appendChild(form);
    

}

addBook.addEventListener('click', () => {
    addNewBook()
})



var modal = document.getElementById('modal');
var open = document.getElementById('open');
var spain = document.getElementsByClassName("close")[0];

open.onclick = function() {
    modal.style.display = "block";
}

spain.onclick = function() {
    modal.style.display = "none";
}





// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

// myLibrary.push(theHobbit)

