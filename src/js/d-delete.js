const BASE_URL = 'http://localhost:3000/books'

function deletBook(id){
    const url = `${BASE_URL}/${id}`
    const options = {
        method: 'DELETE'
    }
    
   return fetch(url, options)
    .then(response => response.json())
}

deletBook(17)
deletBook(16)
deletBook(15)