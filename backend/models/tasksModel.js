const { ObjectId } = require('mongodb');
const connection = require('./connection');

const findByTitle = async (title) => { 
  const find = await connection().then((db) => db.collection('tasks').findOne({ title }));
  return find;
}; 

const findByDate = async (date) => { 
  const find = await connection().then((db) => db.collection('tasks').findOne({ date }));
  return find;
}; 

const findAll = async () => {
  const find = await connection().then((db) => db.collection('tasks').find().toArray());
  return find;
};

const addTask = async ({ title, description, date, hour, duration }) => {
  const add = await connection()
    .then((db) => db.collection('tasks').insertOne({ title, description, date, hour, duration }));
  return add;
};

const updateTask = async ({ id, title, description, date, hour, duration }) => {
  const update = await connection().then((db) =>
    db.collection('tasks').updateOne({
      _id: ObjectId(id) },
      { $set: { title, description, date, hour, duration } }
      ));
  return update;
};

const deleteById = async (id) => ObjectId.isValid(id)
  && connection().then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));

module.exports = {
  findByTitle,
  findByDate,
  addTask,
  findAll,
  updateTask,
  deleteById,
};