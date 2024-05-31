const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    console.log(`${this.title} by ${this.author}, ${pages} pages, ${read}.`)
  }
}
  
  const book1 = new Book('The Truth', 'Yenta', '200', 'not read');
  book1.info(); 


function addBookToLibrary() {
  // do stuff here
}