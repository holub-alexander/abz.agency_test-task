import React from 'react';
import PropTypes from 'prop-types';

const Font = ({ children, type, className = '' }) => {
  const classes = ['font'];

  if (type === 'normal') classes.push('font--normal');
  if (type === 'bold') classes.push('font--bold');

  return <div className={`${classes.join(' ')} ${className}`}>{children}</div>;
};

Font.propTypes = {
  type: PropTypes.oneOf(['normal', 'bold']).isRequired,
  className: PropTypes.string,
};

export default Font;
