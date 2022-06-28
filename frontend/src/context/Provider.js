import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { allTasks, createTask, delTask } from '../services/tasks';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});

  const getTasks = async() => {
    const { data } = await allTasks();
    setTasks(data);
  };

  const postTask = async(task) => {
    const nTask = await createTask(task);
    setTasks([...tasks, nTask]);
  };

  const deleteTask = async(id) => {
    await delTask(id);
  };

  useEffect(() => {
    getTasks();
  }, [])

  const states = {
    tasks,
    newTask,
    setNewTask,
    postTask,
    deleteTask
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
