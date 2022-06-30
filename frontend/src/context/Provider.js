import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { allTasks, createTask, delTask, editTasks, taskByDate, taskByTitle } from '../services/tasks';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [newEdit, setNewEdit] = useState({});

  const getTasks = async() => {
    const task = await allTasks();
    setNewTask({
      title: '',
      description: '',
      date: '',
      hour: '',
      duration: '',
    });
    setTasks(task);
  };

  const postTask = async(task) => {
    await createTask(task);
    getTasks();
  };

  const editTask = async(id, task) => {
    await editTasks(id, task);
    getTasks();
  };

  const deleteTask = async(id) => {
    await delTask(id);
    getTasks();
  };

  const searchByTitle = async(title) => {
    const tasks = await taskByTitle(title);
    setTasks(tasks);
  };

  const searchByDate = async(date) => {
    const tasks = await taskByDate(date);
    setTasks(tasks);
  };

  const handleChange = ({ name, value }, edit) => {
    edit 
    ? setNewEdit({ ...newEdit, [name]: value })
    : setNewTask({ ...newTask, [name]: value });
  };

  useEffect(() => {
    getTasks();
  }, [])

  const states = {
    tasks,
    newTask,
    newEdit,
    searchByDate,
    setNewTask,
    postTask,
    editTask,
    deleteTask,
    searchByTitle,
    handleChange,
  };

  return (
    <Context.Provider value={states}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
