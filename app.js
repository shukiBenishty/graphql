const { ApolloServer, gql, MockList } = require('apollo-server');
const typeDefs =  require('./schema/schema.js').typeDefs;
const resolvers =  require('./schema/resolvers.js').resolvers;
const mongoose = require('mongoose');


mongoose.connect('mongodb://gql-adminq:shukishugi5@ds123753.mlab.com:23753/test-gql')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
