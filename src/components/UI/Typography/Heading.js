import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag, type, children, className = '' } = {}) => {
  const classes = ['heading'];

  if (type === 'normal') classes.push('heading--normal');
  if (type === 'bold') classes.push('heading--bold');
  if (tag === 'h1') classes.push('heading--h1');
  if (tag === 'h2') classes.push('heading--h2');

  return <p className={`${classes.join(' ')} ${className}`}>{children}</p>;
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']).isRequired,
  type: PropTypes.oneOf(['normal', 'bold']).isRequired,
  className: PropTypes.string,
};

export default Heading;
