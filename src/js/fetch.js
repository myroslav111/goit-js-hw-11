import axios from 'axios'
const BASE_URL_MY = 'http://localhost:3000/books'
const BASE_URL = 'https://pixabay.com/api/'
const KEY = '23788919-1e868a4f1ae72234cc449d190'


axios.get(`${BASE_URL_MY}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });