const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'blog';

let client;
let db;

const connectDB = async () => {
  if (db) {
    return db;
  }
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB connected');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error('Database not connected. Call connectDB first.');
  }
  return db;
};

module.exports = { connectDB, getDB };
