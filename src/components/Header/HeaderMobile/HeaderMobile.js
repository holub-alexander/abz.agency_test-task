import React from 'react';

import Menu from '../../Menu/Menu';
import ButtonBurger from '../../UI/Button/ButtonBurger';
import Logo from './../../Logo/Logo';

const HeaderMobile = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const menuClickHander = () => setMenuActive(!menuActive);

  return (
    <>
      <Logo width={104} height={26} />
      <ButtonBurger menuClickHander={menuClickHander} />
      {menuActive ? <Menu type="mobile" isActive={menuActive} /> : null}
      <div
        className={`overlay ${menuActive ? 'overlay--active' : ''}`}
        onClick={() => setMenuActive(false)}
      ></div>
    </>
  );
};

export default HeaderMobile;
