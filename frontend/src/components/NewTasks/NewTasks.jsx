import React, { useContext } from 'react';
import Context from '../../context/Context';
import InputTask from '../InputTasks/InputTask';
import TextAreaTasks from '../TextAreaTasks/TextAreaTask';
import './NewTasks.css';

function NewTasks() {
  const { postTask, newTask } = useContext(Context);

  return (
    <form className="formNewTasks">
      <InputTask
        type="text"
        name="title"
        value={ newTask.title }
      />
      <TextAreaTasks
        name="description" 
        value={ newTask.description }
      />
      <InputTask
        type="date"
        name="date"
        value={ newTask.date }
      />
      <InputTask
        type="time"
        name="hour"
        value={ newTask.hour }
      />
      <InputTask
        type="number"
        name="duration"
        value={ newTask.duration }
      />
      <button
        className="buttonNewTask"
        type="button"
        onClick={ () => postTask(newTask) }
      >
        Salvar
      </button>
    </form>
  )
};

export default NewTasks;
