const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/TasksManager';

const DB_NAME = 'TasksManager';

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = connection;