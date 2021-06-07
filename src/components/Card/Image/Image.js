import React from 'react';
import PropTypes from 'prop-types';

import photoCover from '../../../assets/icons/Photo-cover.svg';

const Image = ({ image }) => {
  const onErrorSrc = e => {
    e.target.src = photoCover;
  };

  return (
    <img className="card__avatar" src={image} onError={onErrorSrc} alt="" />
  );
};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
