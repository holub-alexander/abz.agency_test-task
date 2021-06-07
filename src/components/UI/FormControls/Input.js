import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    value,
    setValue: setValueInput,
    validation,
    placeholder = '',
    helperText = '',
    minLength = 1,
    maxLength = 10,
    isRequired = false,
    name,
  } = props;
  const inputLabel = React.useRef();

  const changeInputHandler = event => {
    const value = event.target.value;

    if (!validation(name, value, minLength, maxLength)) {
      inputLabel.current.classList.add('error');
    } else {
      inputLabel.current.classList.remove('error');
    }

    setValueInput(event.target.value);
  };

  return (
    <label className="input-control" ref={inputLabel}>
      <input
        className="input-control__input"
        placeholder={placeholder}
        value={value}
        onChange={changeInputHandler}
        required={isRequired}
        name={name}
      />
      <span className="input-control__text">{placeholder}</span>
      <p className="input-control__helper">
        {helperText}
        <span>{`${value.length} / ${maxLength}`}</span>
      </p>
    </label>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  setValueInput: PropTypes.func,
  validation: PropTypes.func,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
};

export default Input;
