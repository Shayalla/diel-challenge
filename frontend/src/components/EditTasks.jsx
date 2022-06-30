import React, { useContext } from 'react';
import Context from '../context/Context';

function EditTasks({ id, edit }) {
  const { newTask, editTask, handleChange } = useContext(Context);

  const save = () => {
    editTask(id, newTask);
    edit(false);
  };

  return (
    <div>
      <input type="text" name="title" placeholder="title" onChange={ ({target}) => handleChange(target) } /><br />
      <input type="text" name="description" placeholder="description" onChange={ ({target}) => handleChange(target) } /><br />
      <input type="date" name="date" placeholder="date" onChange={ ({target}) => handleChange(target) } /><br />
      <input type="time" name="hour" placeholder="hour" onChange={ ({target}) => handleChange(target) } /><br />
      <input type="number" name="duration" placeholder="duration" onChange={ ({target}) => handleChange(target) } />min <br />
      <button type="button" onClick={ save }>
        Salvar
      </button>
      <button type="button" onClick={ () => edit(false) }>
        Cancelar
      </button>
    </div>
  )
};

export default EditTasks;