const BASE_URL = 'http://localhost:3000/books'





function updateBookById(update, id) {
    const options = {
    method: 'PATCH',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify(update)
    }
    
    return fetch(`${BASE_URL}/${id}`, options)
           .then(response => response.json())
}

updateBookById({title: 'BOOOOOOOKKKKKKK'}, 7)

updateBookById({title: 'hallo world', rating: 4}, 6)

updateBookById({qwe: ['mmm'], rating: 4}, 4)


