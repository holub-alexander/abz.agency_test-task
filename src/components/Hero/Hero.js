import React from 'react';
import { Picture } from 'react-responsive-picture';
import PropTypes from 'prop-types';

import Heading from './../UI/Typography/Heading';
import Font from './../UI/Typography/Font';
import Button from './../UI/Button/Button';
import useWindowSize from './../../hooks/useWindowSize';

const Hero = ({ images, title, text, btnText = '' }) => {
  const sizes = useWindowSize();

  return (
    <div className="hero">
      <div className="hero__img">
        <Picture
          sources={[
            {
              srcSet: `${images.mobile560}, ${images.mobile2x560} 2x`,
              media: '(max-width: 560px)',
            },
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
            {sizes.width <= 560 ? text.slice(0, 113) : text}
          </Font>
          {btnText !== '' ? (
            <Button type="yellow" link="sign-up">
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
