import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import menuBtn from '../../../assets/icons/Menu.svg';

const ButtonBurger = ({ menuClickHander }) => {
  return (
    <button type="button" className="button-burger" onClick={menuClickHander}>
      <ReactSVG src={menuBtn} />
    </button>
  );
};

ButtonBurger.propTypes = {
  menuClickHander: PropTypes.func.isRequired,
};

export default ButtonBurger;
