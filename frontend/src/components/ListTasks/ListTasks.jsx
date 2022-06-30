import React, { useContext } from 'react';
import Context from '../../context/Context';
import CardTasks from '../CardTasks/CardTasks';
import './ListTasks.css';

function ListTasks() {
  const { tasks } = useContext(Context);
  return (
    <ul>
      { tasks.length !== 0
        ? tasks.map((task) => (
          <CardTasks key={task._id} task={task} />
        ))
      : <p>Sem tarefas!!!</p> }
    </ul>
  )
};

export default ListTasks;
