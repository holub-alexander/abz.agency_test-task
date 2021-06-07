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
    isDisabled = false,
    isSubmit = false,
  } = props;

  return (
    <>
      {link === '' ? (
        <button
          type={isSubmit ? 'submit' : 'button'}
          className={`${
            type === 'yellow' ? 'button button--yelow' : 'button'
          } ${className}`}
          onClick={clickHandler}
          disabled={isDisabled}
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
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
};

export default Button;
