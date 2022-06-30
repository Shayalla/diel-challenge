import React, { useContext } from 'react';
import Context from '../context/Context';
import InputTask from './InputTask';

function NewTasks() {
  const { postTask, newTask } = useContext(Context);

  return (
    <form action="">
      <InputTask type="text" name="title" value={ newTask.title } />
      <InputTask type="text" name="description" value={ newTask.description } />
      <InputTask type="date" name="date" value={ newTask.date } />
      <InputTask type="time" name="hour" value={ newTask.hour } />
      <InputTask type="number" name="duration" value={ newTask.duration } />min
      <button type="button" onClick={ () => postTask(newTask) }>
        Salvar
      </button>
    </form>
  )
};

export default NewTasks;
