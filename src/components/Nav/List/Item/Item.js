import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Font from './../../../UI/Typography/Font';
import { Link } from 'react-scroll';

const Item = ({ title = '', link = '/', mobile, id = '' }) => {
  return (
    <li className={mobile ? 'mobile' : ''}>
      <Font type="normal">
        {id ? (
          <Link to={id} spy={true} smooth={true} offset={-70} duration={500}>
            {title.length > 22 ? `${title}...` : title}
          </Link>
        ) : (
          <NavLink
            to={link}
            activeClassName="nav-list--active"
            exact={link === '/'}
          >
            {title.length > 22 ? `${title}...` : title}
          </NavLink>
        )}
      </Font>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  mobile: PropTypes.bool,
  id: PropTypes.string,
};

export default Item;
