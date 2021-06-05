import React from 'react';
import PropTypes from 'prop-types';

import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import useWindowSize from './../../hooks/useWindowSize';
import HeaderMobile from './HeaderMobile/HeaderMobile';

const Header = ({ type }) => {
  const windowSize = useWindowSize();

  const defineHeader = type => {
    let header = null;

    if (windowSize.width > 768 && type === 'desktop')
      header = <HeaderDesktop />;
    if (windowSize.width <= 768 && type === 'mobile') header = <HeaderMobile />;

    return header;
  };

  return (
    <header className="header header--bg">
      <div className="container">
        <div className="header__wrapper">{defineHeader(type)}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(['desktop', 'mobile']).isRequired,
};

export default Header;
