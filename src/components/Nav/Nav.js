import React from 'react';
import PropTypes from 'prop-types';

import List from './List/List';
import routes from '../../routes';

const Nav = ({ opt }) => {
  const classes = ['nav'];

  if (opt === 'desktop') classes.push('nav--pl-25');

  return (
    <nav className={classes.join(' ')}>
      <List listItems={routes} opt={opt} />
    </nav>
  );
};

Nav.propTypes = {
  opt: PropTypes.oneOf(['desktop', 'mobile']).isRequired,
};

export default Nav;
