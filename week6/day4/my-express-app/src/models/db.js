const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

const connect = async () => {
    const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(process.env.DB_NAME);
};

const fetchData = async (collectionName) => {
    const collection = db.collection(collectionName);
    return await collection.find({}).toArray();
};

module.exports = {
    connect,
    fetchData,
};