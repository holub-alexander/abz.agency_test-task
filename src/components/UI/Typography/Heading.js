import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag, type, children } = {}) => {
  const classes = ['heading'];

  if (type === 'normal') classes.push('heading--normal');
  if (type === 'bold') classes.push('heading--bold');
  if (tag === 'h1') classes.push('heading--h1');
  if (tag === 'h2') classes.push('heading--h2');

  return <p className={classes.join(' ')}>{children}</p>;
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  type: PropTypes.oneOf(['normal', 'bold']),
  children: PropTypes.object,
};

export default Heading;
