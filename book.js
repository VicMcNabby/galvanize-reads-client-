$(appReady);

const API_URL = "https://galvanize-reads-api.herokuapp.com"

function appReady() {
  let id = getID()
  getOneBook(id)
    .then(showOneBook)
  postBook();
  editBook(id);
}

function getOneBook(id) {
  return $.get(`${API_URL}/books/${id}`)
}

function showOneBook(books) {
  const source = $("#books-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    books
  });
  $('.editBookDisplay').append(html);
}


function getID() {
  let currentURL = window.location.href;
  let charArray = currentURL.split('');
  let index = charArray.indexOf('=') + 1;
  let id = currentURL.substring(index);
  return id;
}

function postBook() {
  $('.addBook').submit(function(event) {
    event.preventDefault();
    window.location = 'books.html'

    let info = {
      "title": $('#addBookTitle').val(),
      "genre": $('#addBookGenre').val(),
      "description": $('#addBookDescription').val(),
      "cover_url": $('#addBookCoverURL').val()
    };

    $.post(`${API_URL}/books`, info)
      .then(function(result) {
        console.log(result);
      })
  })
}

function editBook(id) {
  $('.submitEditBook').click((event) => {
    $.ajax({
      url: `${API_URL}/books/${id}`,
      type: 'PUT',
      data: {
        "title": $('#editBookTitle').val(),
        "genre": $('#editBookGenre').val(),
        "description": $('#editBookDescription').val(),
        "cover_url": $('#editBookCoverURL').val()
      },
      success: function(result) {}
    });
    alert('Book Edited')
    window.location = 'books.html'
  })
}
