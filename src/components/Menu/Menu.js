import React from 'react';
import PropTypes from 'prop-types';

import MenuTablet from './MenuTablet/MenuTablet';
import MenuMobile from './MenuMobile/MenuMobile';

const Menu = ({ type, isActive }) => {
  const menuType =
    type === 'tablet' ? (
      <MenuTablet isActive={isActive} />
    ) : (
      <MenuMobile isActive={isActive} />
    );

  return <>{menuType}</>;
};

Menu.propTypes = {
  type: PropTypes.oneOf(['tablet', 'mobile']).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Menu;
