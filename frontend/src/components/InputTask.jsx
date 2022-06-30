import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function InputTask({ type, name, value, edit }) {
  const { handleChange } = useContext(Context);

  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        placeholder={ name }
        onChange={ ({target}) => handleChange(target, edit) }
      />
    </label>
  )
};

InputTask.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default InputTask;