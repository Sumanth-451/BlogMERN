const { connectDB } = require('./db');

const samplePosts = [
  {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    author: 'Alice',
  },
  {
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    author: 'Bob',
  },
  {
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
    author: 'Charlie',
  },
];

const seed = async () => {
  try {
    const db = await connectDB();
    const collection = db.collection('posts');
    await collection.deleteMany({});
    await collection.insertMany(samplePosts);
    console.log('Sample posts inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error inserting sample posts:', error);
    process.exit(1);
  }
};

seed();
