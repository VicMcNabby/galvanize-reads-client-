$(appReady);

let API_URL = "https://galvanize-reads-api.herokuapp.com"

function appReady() {
  getAllBooks()
    .then(showAllBooks);
}

function getAllBooks() {
  return $.get(`${API_URL}/books`);
}

function showAllBooks(books) {
  const source = $("#books-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    books
  });
  $('main').append(html);
}
