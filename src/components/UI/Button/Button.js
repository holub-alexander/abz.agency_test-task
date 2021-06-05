import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, link = '' } = {}) => {
  // TODO: Реализовать плавный переход к якорю
  const btn =
    link === '' ? (
      <button
        type="button"
        className={type === 'yellow' ? 'button button--yelow' : 'button'}
      >
        {children}
      </button>
    ) : (
      <a
        href={link}
        className={type === 'yellow' ? 'button button--yelow' : 'button'}
      >
        {children}
      </a>
    );

  return { btn };
};

Button.propTypes = {
  children: PropTypes.object,
  type: PropTypes.oneOf(['yellow']).isRequired,
  link: PropTypes.string,
};

export default Button;
