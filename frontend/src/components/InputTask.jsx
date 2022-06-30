import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function InputTask({ type, name }) {
  const { newTask, handleChange } = useContext(Context);

  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ newTask[name] }
        placeholder={ name }
        onChange={ ({target}) => handleChange(target) }
      />
    </label>
  )
};

InputTask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputTask;