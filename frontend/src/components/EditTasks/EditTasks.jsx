import React, { useContext } from 'react';
import Context from '../../context/Context';
import InputTask from '../InputTasks/InputTask';
import TextAreaTasks from '../TextAreaTasks/TextAreaTask';
import './EditTasks.css';

function EditTasks({ id, setEdit }) {
  const { newEdit, editTask } = useContext(Context);

  const save = () => {
    editTask(id, newEdit);
    setEdit(false);
  };

  return (
    <form className="formEdit">
        <InputTask
          type="text"
          name="title"
          value={ newEdit.title }
          edit
        />
        <TextAreaTasks
          name="description"
          value={ newEdit.description }
          edit
        />
        <InputTask
          type="date"
          name="date"
          value={ newEdit.date }
          edit
        />
        <InputTask
          type="time"
          name="hour"
          value={ newEdit.hour }
          edit
        />
        <InputTask
          type="number"
          name="duration"
          value={ newEdit.duration }
          edit
        />
      <div className="inputs">
        <button
          type="button"
          className="buttonEdit"
          onClick={ save }
        >
          Salvar
        </button>
        <button
          type="button"
          className="buttonEdit"
          onClick={ () => setEdit(false) }
        >
          Cancelar
        </button>
      </div>

    </form>
  )
};

export default EditTasks;