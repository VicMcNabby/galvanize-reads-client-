// $(appReady);
//
// let API_URL = ''
//
// function appReady() {
//   getAllBooks();
//   showAllBooks();
// }
//
// function getAllBooks() {
//   return $.get(`${API_URL}/books`);
// }
//
// function showAllBooks() {
//   let context = {
//     book_title: books.title,
//
//   }
//   const source = $("#books-template").html();
//   const template = Handlebars.compile(source);
//   const html = template(context);
//   $('main').append(html);
// }
