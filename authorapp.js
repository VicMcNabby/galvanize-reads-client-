$(appReady);

let API_URL = "https://galvanize-reads-api.herokuapp.com"

function appReady() {
  let id = getID()
  getAllAuthors()
    .then(showAuthors)
  getOneAuthor(id)
    .then(showOneAuthor)
  deleteAuthor(id)
  postAuthor()
}

function getAllAuthors() {
  return $.get(`${API_URL}/authors`);
}

function getOneAuthor(id) {
  return $.get(`${API_URL}/authors/${id}`)
}

function showAuthors(authors) {
  const source = $("#authors-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    authors
  });
  $('.authorDisplay').append(html);
}

function showOneAuthor(authors) {
  $('.authorDisplay').hide()
  const source = $("#authors-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    authors
  });
  $('.oneAuthorDisplay').append(html);
}

function getID() {
  let currentURL = window.location.href;
  let charArray = currentURL.split('');
  let index = charArray.indexOf('=') + 1;
  let id = currentURL.substring(index);
  return id;
}

function deleteAuthor(id) {
  $('.deleteAuthorButton').click((event) => {
    alert('Author Deleted')
    $.ajax({
      url: `${API_URL}/authors/${id}`,
      type: 'DELETE',
      success: function(result) {}
    });
    window.location = 'authors.html'
  })
}

function postAuthor() {
  $('.addAuthor').submit(function(event) {
    event.preventDefault();
    alert('Author added')
    window.location = 'authors.html'
    let info = {
      "first_name": $('#addAuthorFirstName').val(),
      "last_name": $('#addAuthorLastName').val(),
      "bio": $('#addAuthorBio').val(),
      "portrait_url": $('#addPortraitURL').val()
    };

    $.post(`${API_URL}/authors`, info)
      .then(function(result) {
        console.log(result);
      })
  })
}
