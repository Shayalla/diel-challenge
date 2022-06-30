import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { allTasks, createTask, delTask, editTasks, taskByTitle } from '../services/tasks';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});

  const getTasks = async() => {
    const { data } = await allTasks();
    setNewTask({
      title: '',
      description: '',
      date: '',
      hour: '',
      duration: '',
    });
    setTasks(data);
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

  const handleChange = ({ name, value }) => {
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  useEffect(() => {
    getTasks();
  }, [])

  const states = {
    tasks,
    newTask,
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
