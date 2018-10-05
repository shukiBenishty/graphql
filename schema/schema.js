const { gql } = require('apollo-server');
export let typeDefs = gql`
  type Book{
    id: ID!

    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!

    name: String
    age: Int
    books: [Book]
  }


  type Query {
    book(id: ID!): Book
    author(id: ID!): Author
    books: [Book]
    authors: [Author]
  }


`;
