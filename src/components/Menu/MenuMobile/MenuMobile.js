import React from 'react';
import ScrollLock from 'react-scrolllock';
import PropTypes from 'prop-types';

import Nav from '../../Nav/Nav';
import Logo from '../../Logo/Logo';

const MenuMobile = ({ isActive }) => {
  const classes = ['menu'];

  if (isActive) classes.push('menu--active');

  return (
    <ScrollLock>
      <div className={classes.join(' ')}>
        <div className="menu__header">
          <Logo />
        </div>
        <Nav opt="mobile" />
      </div>
    </ScrollLock>
  );
};

MenuMobile.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default MenuMobile;
