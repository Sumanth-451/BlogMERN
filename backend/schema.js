const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        content: String!
        author: String!
    }

    type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }
`;

module.exports = typeDefs;
