const {
  addBook,
  showAllBook,
  showBookById,
  editBook,
  deleteBook,
} = require('../handler/libraries');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: showBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

module.exports = routes;
