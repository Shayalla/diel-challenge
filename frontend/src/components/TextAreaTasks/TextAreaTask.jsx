import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
import './TextAreaTask.css';

function TextAreaTasks({ name, value, edit }) {
  const { handleChange } = useContext(Context);

  return (
    <textarea
      className="text"
      name={ name }
      rows="4"
      cols="25"
      value={ value }
      onChange={ ({target}) => handleChange(target, edit) }
    />
  )
};

TextAreaTasks.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default TextAreaTasks;