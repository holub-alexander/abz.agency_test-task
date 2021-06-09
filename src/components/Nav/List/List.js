import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Item from './Item/Item';

const List = ({ listItems, opt }) => {
  const classes = ['nav-list'];

  if (opt !== 'desktop') classes.push('nav-list--mobile');

  return (
    <ul className={classes.join(' ')}>
      {listItems.map(item => (
        <Item
          title={item.title}
          link={item.to}
          key={uuidv4()}
          mobile={item.mobile}
          id={item.id}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  listItems: PropTypes.array.isRequired,
  opt: PropTypes.oneOf(['desktop', 'mobile']).isRequired,
};

export default List;
