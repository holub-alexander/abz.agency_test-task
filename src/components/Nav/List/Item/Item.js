import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Font from './../../../UI/Typography/Font';

const Item = ({ title = '', link = '/', mobile }) => {
  return (
    <li className={mobile ? 'mobile' : ''}>
      <Font type="normal">
        <NavLink
          to={link}
          activeClassName="nav-list--active"
          exact={link === '/'}
        >
          {title.length > 22 ? `${title}...` : title}
        </NavLink>
      </Font>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  mobile: PropTypes.bool,
};

export default Item;
