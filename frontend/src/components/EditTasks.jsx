import React, { useContext } from 'react';
import Context from '../context/Context';
import InputTask from './InputTask';

function EditTasks({ id, setEdit }) {
  const { newEdit, editTask } = useContext(Context);

  const save = () => {
    editTask(id, newEdit);
    setEdit(false);
  };

  return (
    <div>
      <InputTask type="text" name="title" value={ newEdit.title } edit /><br />
      <InputTask type="text" name="description" value={ newEdit.description } edit /><br />
      <InputTask type="date" name="date" value={ newEdit.date } edit /><br />
      <InputTask type="time" name="hour" value={ newEdit.hour } edit /><br />
      <InputTask type="number" name="duration" value={ newEdit.duration } edit /> min <br />
      <button type="button" onClick={ save }>
        Salvar
      </button>
      <button type="button" onClick={ () => setEdit(false) }>
        Cancelar
      </button>
    </div>
  )
};

export default EditTasks;