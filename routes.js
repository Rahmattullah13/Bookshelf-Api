const {
  postBookHandler, getAllBooks, getAllBooksById, editBooksById, deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: postBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookid}',
    handler: getAllBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{bookid}',
    handler: editBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = routes;
