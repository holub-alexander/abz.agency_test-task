import React from 'react';

import Logo from '../../Logo/Logo';
import Nav from '../../Nav/Nav';

const HeaderDesktop = () => {
  return (
    <>
      <Logo width={104} height={26} />
      <Nav opt="desktop" />
    </>
  );
};

export default HeaderDesktop;
