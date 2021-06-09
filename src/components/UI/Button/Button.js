import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Button = props => {
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
        <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${
            type === 'yellow' ? 'button button--yelow' : 'button'
          } ${className}`}
        >
          {children}
        </Link>
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
