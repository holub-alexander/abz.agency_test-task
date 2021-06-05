import React from 'react';
import { Picture } from 'react-responsive-picture';
import PropTypes from 'prop-types';

import Heading from './../UI/Typography/Heading';
import Font from './../UI/Typography/Font';
import Button from './../UI/Button/Button';

const Hero = ({ images, title, text, btnText = '' }) => {
  return (
    <div className="hero">
      <div className="hero__img">
        <Picture
          sources={[
            {
              srcSet: `${images.avif}`,
              type: 'image/avif',
            },
            {
              srcSet: `${images.webp}`,
              type: 'image/webp',
            },
            {
              srcSet: `${images.jpeg}`,
              type: 'image/jpeg',
            },
          ]}
        />
      </div>

      <div className="hero__info-container">
        <div className="hero__info">
          <Heading tag="h1" type="normal" className="hero__info-title">
            {title}
          </Heading>
          <Font type="normal" className="hero__info-text">
            {text}
          </Font>
          {btnText !== '' ? (
            <Button type="yellow">
              <Font type="normal">{btnText}</Font>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  images: PropTypes.shape({
    avif: PropTypes.string,
    webp: PropTypes.string,
    jpeg: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};

export default Hero;
