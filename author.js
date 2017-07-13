$(appReady);

let API_URL = "https://galvanize-reads-api.herokuapp.com"

function appReady() {
  let id = getID()
  getOneAuthor(id)
    .then(editOneAuthor)
  editAuthor(id)
}

function getOneAuthor(id) {
  return $.get(`${API_URL}/authors/${id}`)
}

function editOneAuthor(authors) {
  const source = $("#authors-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    authors
  });
  $('.editAuthorDisplay').append(html);
}

function getID() {
  let currentURL = window.location.href;
  let charArray = currentURL.split('');
  let index = charArray.indexOf('=') + 1;
  let id = currentURL.substring(index);
  return id;
}

function editAuthor(id) {
  $('.submitEditAuthor').click((event) => {
    $.ajax({
      url: `${API_URL}/authors/${id}`,
      type: 'PUT',
      data: {
        "first_name": $('#addAuthorFirstName').val(),
        "last_name": $('#addAuthorLastName').val(),
        "bio": $('#addAuthorBio').val(),
        "portrait_url": $('#addPortraitURL').val()
      },
      success: function(result) {}
    });
    alert('Author edited')
    window.location = 'authors.html'
  })
}
