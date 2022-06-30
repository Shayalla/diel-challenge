import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import EditTasks from './EditTasks';

function CardTasks({ task: { id, title, description, date, hour, duration} }) {
  const { deleteTask } = useContext(Context);
  const [edit, setEdit] = useState(false)
  const dateFormated = date.split('-').reverse().join('/');

  return edit ?  <EditTasks id={ id } edit={ setEdit } /> : (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <p>{dateFormated}</p>
      <p>{hour}</p>
      <p>{duration} min</p>
      <button type="button" onClick={ () => setEdit(true) }>Editar</button>
      <button type="button" onClick={ () => deleteTask(id) }>Excluir</button>
      {/* {edit && <EditTasks id={ id } edit={ setEdit } />} */}
    </li>
  )
};

CardTasks.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default CardTasks;
