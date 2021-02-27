const container = document.querySelector('.books__container')
const form = document.querySelector('.modal--form')
const modal = document.querySelector('.modal')


const myBookLibrary = []


form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary(e)
    container.innerHTML = renderBooks()
    modal.style.display = 'none'
    form.reset()
})

function addBookToLibrary({target}) {
    
    const book = {
        title: target.bookTitle.value,
        author: target.bookAuthor.value,
        pages: target.bookNumber.value
    }
    
 myBookLibrary.unshift(book);
}

function renderBooks() {
    return myBookLibrary.map(({title, author, pages}) => {
     return `<article class="card">
          <h3 class="book--title">Book Title</h3>
          <p class="paragraph">${title}</p>
          <h3 class="book--title">Book Author</h3>
          <p class="paragraph">${author}</p>
          <h3 class="book--title">Book Pages</h3>
          <p class="paragraph">${pages}</p>
      </article>`
    })
  }
  

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none'
})

document.querySelector('#addBook').addEventListener('click', () => {
    modal.style.display = 'block'
})

