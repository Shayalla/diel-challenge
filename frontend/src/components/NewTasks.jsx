import React, { useContext } from 'react';
import Context from '../context/Context';
import InputTask from './InputTask';

function NewTasks() {
  const { postTask, newTask } = useContext(Context);

  return (
    <form action="">
      <InputTask type="text" name="title" />
      <InputTask type="text" name="description" />
      <InputTask type="date" name="date" />
      <InputTask type="time" name="hour" />
      <InputTask type="number" name="duration" />min
      <button type="button" onClick={ () => postTask(newTask) }>
        Salvar
      </button>
    </form>
  )
};

export default NewTasks;
