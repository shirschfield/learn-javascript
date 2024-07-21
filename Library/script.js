document.addEventListener("DOMContentLoaded", () => {
  let myLibrary = [];
  let newBook

  const addBookBtn = document.querySelector('#addBookBtn');
  addBookBtn.addEventListener('click', addBookToLibrary);


  class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author
      this.pages = pages
      this.read = read
    }
  }


  function addBookToLibrary() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const read = document.querySelector('#read').checked

    newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    displayBooks()
  }

  function displayBooks() {
    const display = document.getElementById('Library-container')
    const books = document.querySelectorAll('.book')
    books.forEach(book => display.removeChild(book))

    for (let i = 0; i < myLibrary.length; i++) {
      createBook(myLibrary[i])
    }
  }

  function createBook(item) {
    const library = document.querySelector('#Library-container')
    const bookDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const pagesDiv = document.createElement('div')
    const removeBtn = document.createElement('button')
    const readBtn = document.createElement('button')

    bookDiv.classList.add('book')
    bookDiv.setAttribute('id', myLibrary.indexOf(item))

    titleDiv.textContent = item.title
    titleDiv.classList.add('title')
    bookDiv.appendChild(titleDiv)

    authorDiv.textContent = item.author
    authorDiv.classList.add('author')
    bookDiv.appendChild(authorDiv)

    pagesDiv.textContent = item.pages
    pagesDiv.classList.add('pages')
    bookDiv.appendChild(pagesDiv)

    readBtn.classList.add('readBtn')
    bookDiv.appendChild(readBtn)
    if (item.read === false) {
      readBtn.textContent = 'Not Read'
    } else {
      readBtn.textContent = 'Read'
    }

    removeBtn.textContent = 'Remove'
    removeBtn.setAttribute('id', 'removeBtn')
    bookDiv.appendChild(removeBtn)

    library.appendChild(bookDiv)

    removeBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(item), 1)
      displayBooks()
    })

    readBtn.addEventListener('click', () => {
      item.read = !item.read
      displayBooks()
    })

  }

})
