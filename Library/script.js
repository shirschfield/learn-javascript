document.addEventListener("DOMContentLoaded", () => {
const myLibrary = [];



const list = document.querySelector("ul");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
  addBookToLibrary()
})


const input = document.querySelector("input");

addButton.addEventListener("click", () => {
     const itemText = input.value;
     input.value = "";
    
     const listItem = document.createElement("li");
     const span = document.createElement("span");
     const deleteButton = document.createElement("button");

     listItem.appendChild(span);
     span.textContent = itemText;
     listItem.appendChild(deleteButton);
     deleteButton.textContent = "Delete";
     list.appendChild(listItem);

     deleteButton.addEventListener("click", function(){
        list.removeChild(listItem);
     });

     input.focus();
});


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
  const title = inputTitle.value
  const author = inputAuthor.value
  const pages = inputPages.value
  const read = inputRead.checked ? "read" : "not read"

  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

})

