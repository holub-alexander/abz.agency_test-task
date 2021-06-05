import React from 'react';
import PropTypes from 'prop-types';

import MenuMobile from '../MenuMobile/MenuMobile';

const MenuTablet = ({ isActive }) => {
  return <MenuMobile isActive={isActive} />;
};

MenuTablet.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default MenuTablet;
