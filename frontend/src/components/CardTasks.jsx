import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function CardTasks({ task: { id, title, description, date, hour, duration} }) {
  const { deleteTask } = useContext(Context);

  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
      <p>{hour}</p>
      <p>{duration} min</p>
      <button>Editar</button>
      <button onClick={ () => deleteTask(id) }>Excluir</button>
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
