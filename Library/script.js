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

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'




function addBookToLibrary() {
  // do stuff here
}