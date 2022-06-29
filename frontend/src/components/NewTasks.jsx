import React, { useContext } from 'react';
import Context from '../context/Context';

function NewTasks() {
  const { postTask, newTask, setNewTask } = useContext(Context);

  const handleChange = ({ name, value }) => {
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  return (
    <form action="">
      <label htmlFor="title">
        <input type="text" id="title" name="title" value={newTask.title} onChange={ ({target}) => handleChange(target) } />
      </label>
      <label htmlFor="description">
        <input type="text" id="description" name="description" value={newTask.description} onChange={ ({target}) => handleChange(target) } />
      </label>
      <label htmlFor="date">
        <input type="date" id="date" name="date" value={newTask.date} onChange={ ({target}) => handleChange(target) } />
      </label>
      <label htmlFor="hour">
        <input type="time" id="hour" name="hour" value={newTask.hour} onChange={ ({target}) => handleChange(target) } />
      </label>
      <label htmlFor="duration">
        <input type="number" id="duration" name="duration" value={newTask.duration} onChange={ ({target}) => handleChange(target) } />min
      </label>
      <button type="button" onClick={ () => postTask(newTask) }>
        Salvar
      </button>
    </form>
  )
};

export default NewTasks;
