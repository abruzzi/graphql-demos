const { RESTDataSource } = require('apollo-datasource-rest');

class BooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  async getBook(id) {
    return this.get(`books/${id}`);
  }

  async getBooks() {
    const data = await this.get('books');
    return JSON.parse(data);
  }
}

module.exports = { BooksAPI }