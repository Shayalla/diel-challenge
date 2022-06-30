const tasksService = require('../services/tasksService');

const create = async (req, res) => {
  const { title, description, date, hour, duration } = req.body;
  const task = await tasksService.createTask({ title, description, date, hour, duration });
  return res.status(201).json(task);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, hour, duration } = req.body;
  const task = await tasksService.upTask({ id, title, description, date, hour, duration });
  return res.status(200).json(task);
};

const getAll = async (_req, res) => {
  const { tasks } = await tasksService.findAllTasks();
  return res.status(200).json(tasks);
};

const delTask = async (req, res) => {
  const { id } = req.params;
  await tasksService.deleteTask(id);
  
  res.status(200).send();
};

const findByTitle = async (req, res) => {
  const { search } = req.query;
  const task = await tasksService.findBytitle(search);
  return res.status(200).json([task]);
};

const findByDate = async (req, res) => {
  const { search } = req.query;
  const task = await tasksService.findByDate(search);
  return res.status(200).json([task]);
};

module.exports = {
  create,
  getAll,
  update,
  delTask,
  findByTitle,
  findByDate
};