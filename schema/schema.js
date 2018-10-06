const { gql } = require('apollo-server-express');
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

  type Mutation {
    addBook(name: String!, genre: String!, authorId: ID!): Book
    addAuthor(name: String!, age: Int!): Author
  }

`;
