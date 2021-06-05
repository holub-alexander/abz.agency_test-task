import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  // TODO: Реализовать плавный переход к якорю
  const {
    children,
    type,
    link = '',
    className = '',
    clickHandler = null,
  } = props;

  return (
    <>
      {link === '' ? (
        <button
          type="button"
          className={`${
            type === 'yellow' ? 'button button--yelow' : 'button'
          } ${className}`}
          onClick={clickHandler}
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
  clickHandler: PropTypes.func,
};

export default Button;
