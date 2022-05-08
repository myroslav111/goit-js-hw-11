const BASE_URL = 'http://localhost:3000/books'


function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book)
    }

    return fetch(`${BASE_URL}`, options)
    .then(response => response.json())
}

addBook({
    title: "Тестовая книга",
    author: "я",
    rating: 10,
    qwe: ["s1", "g1", "у1"]
}).then(renderBook)

function renderBook(book){
    console.log('received a response from the backend');
    console.log(book);
}

