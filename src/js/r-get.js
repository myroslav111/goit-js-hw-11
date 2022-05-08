const BASE_URL = 'http://localhost:3000/books'

function fetchBooks(){
    fetch(`${BASE_URL}/books`)
    .then(response => {
          response.json()
        })
}

function fetchBookById(id){
    fetch(`http://localhost:3000/books/${id}`)
    .then(response => {
          response.json()
        })
}

fetchBooks()
fetchBookById(2)
fetchBookById(3)

