const { ObjectId } = require('mongodb');
const { connectDB } = require('./db');

const resolvers = {
  Query: {
    posts: async () => {
      const db = await connectDB();
      const posts = await db.collection('posts').find().toArray();
      return posts.map(post => ({
        id: post._id.toString(),
        title: post.title,
        content: post.content,
        author: post.author,
      }));
    },
    post: async (_, { id }) => {
      const db = await connectDB();
      const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
      if (!post) return null;
      return {
        id: post._id.toString(),
        title: post.title,
        content: post.content,
        author: post.author,
      };
    },
  },
};

module.exports = resolvers;
