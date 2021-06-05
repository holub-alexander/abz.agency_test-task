import React from 'react';
import PropTypes from 'prop-types';

const NormalFont = ({ children, type }) => {
  const classes = ['font'];

  if (type === 'normal') classes.push('font--normal');
  if (type === 'bold') classes.push('font--bold');

  return <div className={classes.join(' ')}>{children}</div>;
};

NormalFont.propTypes = {
  children: PropTypes.object,
  type: PropTypes.oneOf(['normal', 'bold']),
};

export default NormalFont;
