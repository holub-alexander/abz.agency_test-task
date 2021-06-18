import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const Input = props => {
  const {
    value,
    setValue: setValueInput,
    validation,
    placeholder = '',
    helperText = '',
    isError = false,
    minLength = 1,
    maxLength = 10,
    isRequired = false,
    name,
    type,
  } = props;
  const inputLabel = React.useRef();

  const changeInputHandler = event => {
    const value =
      type === 'tel'
        ? event.target.value.replace(/[\s_]/gi, '')
        : event.target.value;

    if (!validation(name, value, minLength, maxLength)) {
      inputLabel.current.classList.add('error');
    } else {
      inputLabel.current.classList.remove('error');
    }

    if (event.target.name === 'user-phone') {
      setValueInput(value);
    } else {
      setValueInput(event.target.value);
    }
  };

  return (
    <label
      className={`input-control ${isError ? 'error' : ''}`}
      ref={inputLabel}
    >
      {type === 'tel' ? (
        <InputMask
          mask="+38\0 99 999 99 99"
          maskChar="_"
          value={value}
          onChange={changeInputHandler}
        >
          {inputProps => (
            <input
              {...inputProps}
              className="input-control__input"
              placeholder={placeholder}
              required={isRequired}
              name={name}
              autoComplete="off"
              type="tel"
            />
          )}
        </InputMask>
      ) : (
        <input
          className="input-control__input"
          placeholder={placeholder}
          value={value}
          onChange={changeInputHandler}
          required={isRequired}
          name={name}
          autoComplete="off"
        />
      )}

      <span className="input-control__text">{placeholder}</span>
      <p className="input-control__helper">
        {helperText}
        <span>{`${value.length} / ${maxLength}`}</span>
      </p>
    </label>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  setValueInput: PropTypes.func,
  validation: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  isError: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
