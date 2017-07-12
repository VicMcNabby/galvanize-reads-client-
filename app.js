// const API_URL = "https://galvanize-reads-api.herokuapp.com"

$(appReady);

let API_URL = "https://galvanize-reads-api.herokuapp.com"

function appReady() {
  let id = getID()
  getAllBooks()
    .then(showBooks)
  getOneBook(id)
    .then(showOneBook)
}

function getAllBooks() {
  return $.get(`${API_URL}/books`);
}

function getOneBook(id) {
  return $.get(`${API_URL}/books/${id}`)
}

function showBooks(books) {
  const source = $("#books-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    books
  });
  $('.bookDisplay').append(html);
}

function showOneBook(books) {
  $('.bookDisplay').hide()
  const source = $("#books-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    books
  });
  $('.oneBookDisplay').append(html);
}

function getID() {
  let currentURL = window.location.href;
  let charArray = currentURL.split('');
  let index = charArray.indexOf('=') + 1;
  let id = currentURL.substring(index);
  return id;
}
