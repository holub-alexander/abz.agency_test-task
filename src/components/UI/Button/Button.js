import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, link = '', className = '' } = {}) => {
  // TODO: Реализовать плавный переход к якорю

  return (
    <>
      {link === '' ? (
        <button
          type="button"
          className={`${
            type === 'yellow' ? 'button button--yelow' : 'button'
          } ${className}`}
        >
          {children}
        </button>
      ) : (
        <a
          href={link}
          className={`${
            type === 'yellow' ? 'button button--yelow' : 'button'
          } ${className}`}
        >
          {children}
        </a>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['yellow']).isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
