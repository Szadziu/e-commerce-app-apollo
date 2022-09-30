const { ApolloServer, gql } = require('apollo-server');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { typeDefs } = require('./schema');
const { categories, products, reviews } = require('./db');

// String, Int, Float, Boolean

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
    },
    context: {
        products,
        categories,
        reviews,
    },
});

server.listen().then(({ url }) => {
    console.log('server is ready at' + url);
});
