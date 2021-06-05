import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ type, children }) => {
  const classes = ['text'];

  if (type === 'p1') classes.push('text--p1');

  return <p className={classes.join(' ')}>{children}</p>;
};

Text.propTypes = {
  type: PropTypes.oneOf(['p1']),
  children: PropTypes.object,
};

export default Text;
