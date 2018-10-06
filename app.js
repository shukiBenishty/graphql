const { ApolloEngine } = require("apollo-engine");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs =  require('./schema/schema.js').typeDefs;
const resolvers =  require('./schema/resolvers.js').resolvers;
const express = require("express");
const mongoose = require('mongoose');

mongoose.connect('mongodb://gql-adminq:shukishugi5@ds123753.mlab.com:23753/test-gql')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true
});

server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: "service:first-graphql:rBGUqkNJUP-vVr0gCWhQ6A"
});

engine.listen({
  port: 4000,
  expressApp: app
});


// npm i -g apollo
// apollo schema:publish --endpoint=http://localhost:4000/graphql --key="service:first-graphql:rBGUqkNJUP-vVr0gCWhQ6A"
