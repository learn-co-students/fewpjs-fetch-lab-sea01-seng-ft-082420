function fetchBooks() {
const url = "https://anapioficeandfire.com/api/books"
return fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(json){
  renderBooks(json)
  // let array = []
  // json.forEach(books => array.push(books.characters.length))
  // let sum = array.reduce(function(t, n){
  //   return t + n;
  // }, 0)
  // console.log(sum)

  // array = []
  // json.forEach(books => array.push(books.characters))
  // console.log(array)
})
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
