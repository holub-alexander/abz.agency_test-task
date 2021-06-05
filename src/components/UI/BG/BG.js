import React from 'react';
import PropTypes from 'prop-types';

const BG = ({ color, children }) => {
  const classes = ['bg'];

  if (color === 'yelow') classes.push('bg--yellow');
  if (color === 'blue') classes.push('bg--blue');
  if (color === 'light-gray') classes.push('bg--light-gray');

  return <div className={classes.join(' ')}>{children}</div>;
};

BG.propTypes = {
  color: PropTypes.oneOf(['yellow', 'blue', 'light-gray']).isRequired,
};

export default BG;
