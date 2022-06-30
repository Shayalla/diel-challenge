const tasksModel = require('../models/tasksModel');

const findAllTasks = async () => {
  const tasks = await tasksModel.findAll();
  return { tasks };
};

const findBytitle = async (title) => {
  const tasks = await tasksModel.findByTitle(title);
  return tasks;
};

const findByDate = async (date) => {
  const tasks = await tasksModel.findByDate(date);
  return tasks;
};

const createTask = async (task) => {
  const newTask = await tasksModel.addTask(task);
  return newTask;
};

const upTask = async (task) => {
  const newTask = await tasksModel.updateTask(task);
  return newTask;
};

const deleteTask = async (id) => {
  await tasksModel.deleteById(id);
};

module.exports = {
  createTask,
  findAllTasks,
  findBytitle,
  findByDate,
  upTask,
  deleteTask,
};