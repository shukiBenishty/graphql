const Book = require('../models/book');
const Author = require('../models/Author');


export let resolvers = {
  Query: {
    book: (_,args) => {
        return Book.findById(args.id);
     },
    author: (_,args) => {
      return Author.findById(args.id);
    },
    books: () => {
      return Book.find({});
    },
    authors: () => {
      return Author.find({});
    }
  },
  Author: {
    books(author) {
      return Book.find({ authorId: author.id });
    }
  },
  Book: {
    author(book) {
      return Author.findById(book.authorId);
    }
  }
}
