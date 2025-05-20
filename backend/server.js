const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const startServer = async () => {
    const app = express();
    await db.connectDB();

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });
};

startServer();
