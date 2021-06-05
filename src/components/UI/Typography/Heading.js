import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  const {
    tag,
    type,
    children,
    className = '',
    dataTip = null,
    dataFor = null,
  } = props;
  const classes = ['heading'];

  if (type === 'normal') classes.push('heading--normal');
  if (type === 'bold') classes.push('heading--bold');
  if (tag === 'h1') classes.push('heading--h1');
  if (tag === 'h2') classes.push('heading--h2');

  return (
    <p
      className={`${classes.join(' ')} ${className}`}
      data-tip={dataTip}
      data-for={dataFor}
    >
      {children}
    </p>
  );
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']).isRequired,
  type: PropTypes.oneOf(['normal', 'bold']).isRequired,
  className: PropTypes.string,
  dataTip: PropTypes.string,
  dataFor: PropTypes.string,
};

export default Heading;
