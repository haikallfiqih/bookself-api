const books = require('../source/books');

const showAllBook = (request, h) => {
  let filteredBook = books;
  // filter query
  const { name, reading, finished } = request.query;

  if (name !== undefined) {
    filteredBook = filteredBook.filter((b) => b
      .name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading !== undefined) {
    filteredBook = filteredBook.filter((b) => Number(b.reading) === Number(reading));
  }

  if (finished !== undefined) {
    filteredBook = filteredBook.filter((b) => Number(b.finished) === Number(finished));
  }

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBook.map((b) => ({
        id: b.id,
        name: b.name,
        publisher: b.publisher,
      })),
    },
  });
  response.code(200);

  return response;
};

module.exports = showAllBook;
