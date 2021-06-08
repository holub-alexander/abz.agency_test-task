import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';

const Logo = ({ width = 104, height = 26 }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo company" width={width} height={height} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;
