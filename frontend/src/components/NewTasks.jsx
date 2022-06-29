import React, { useContext } from 'react';
import Context from '../context/Context';

function NewTasks() {
  const { postTask, newTask, setNewTask } = useContext(Context);

  const handleChange = ({target: {name, value}}) => {
    setNewTask({
      ...newTask,
      [name]: value
    });
  };

  return (
    <form action="">
      <label htmlFor="title">
        <input type="text" id="title" name="title" onChange={ (e) => handleChange(e) } />
      </label>
      <label htmlFor="description">
        <input type="text" id="description" name="description" onChange={ (e) => handleChange(e) } />
      </label>
      <label htmlFor="date">
        <input type="date" id="date" name="date" onChange={ (e) => handleChange(e) } />
      </label>
      <label htmlFor="hour">
        <input type="time" id="hour" name="hour" onChange={ (e) => handleChange(e) } />
      </label>
      <label htmlFor="duration">
        <input type="number" id="duration" name="duration" onChange={ (e) => handleChange(e) } />min
      </label>
      <button type="submit" onClick={ () => postTask(newTask) }>
        Salvar
      </button>
    </form>
  )
};

export default NewTasks;
