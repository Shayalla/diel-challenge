import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import EditTasks from '../EditTasks/EditTasks';
import './CardTasks.css';

function CardTasks({ task: { _id, title, description, date, hour, duration } }) {
  const { deleteTask } = useContext(Context);
  const [edit, setEdit] = useState(false)
console.log(_id);
  const dateFormated = date.split('-').reverse().join('/');

  return edit
    ? <EditTasks id={ _id } setEdit={ setEdit } />
    : (
      <li>
        <p><strong>{title}</strong></p>
        <p>Descrição: {description}</p>
        <p>Data: {dateFormated}</p>
        <p>Horário: {hour}</p>
        <p>Duração: {duration} min</p>
        <div>
          <button className="buttonCard" type="button" onClick={ () => setEdit(true) }>Editar</button>
          <button className="buttonCard" type="button" onClick={ () => deleteTask(_id) }>Excluir</button>
        </div>
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
