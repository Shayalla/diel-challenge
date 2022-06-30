import React, { useContext } from 'react';
import Context from '../../context/Context';
import CardTasks from '../CardTasks/CardTasks';
import './ListTasks.css';

function ListTasks() {
  const { tasks } = useContext(Context);
  return (
    <ul>
      {tasks.map((task) => (
        <CardTasks key={task.id} task={task} />
      ))}
    </ul>
  )
};

export default ListTasks;
