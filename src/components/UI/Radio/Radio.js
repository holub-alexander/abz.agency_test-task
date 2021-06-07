import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, value, label, radioIndex, setRadioChecked }) => {
  const handleRadioChange = event => {
    event.target.checked = true;
    setRadioChecked(event.target.value);
  };

  return (
    <label className="radio-btn radio-btn__label">
      <input
        className="radio-btn__input"
        type="radio"
        value={value}
        name={name}
        defaultChecked={radioIndex === 0}
        onChange={handleRadioChange}
      />
      <span>{label}</span>
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  label: PropTypes.string,
  radioIndex: PropTypes.number,
  setRadioChecked: PropTypes.func,
};

export default Radio;
