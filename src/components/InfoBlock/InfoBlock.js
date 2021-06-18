import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../UI/Typography/Heading';
import Font from './../UI/Typography/Font';
import Button from '../UI/Button/Button';

const InfoBlock = props => {
  const { linkImg, title, descr, text, btnText } = props;

  return (
    <div className="info-block">
      <div className="info-block__img">
        <img src={linkImg} alt={title} width="387" height="340" />
      </div>

      <div className="info-block__info-box">
        <Heading tag="h1" type="normal" className="info-block__title">
          {title}
        </Heading>
        <Heading tag="h2" type="normal" className="info-block__descr">
          {descr}
        </Heading>
        <Font type="normal" className="info-block__text">
          {text}
        </Font>
        <Button type="yellow" className="info-block__btn" link="sign-up">
          <Font type="normal">{btnText}</Font>
        </Button>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {
  linkImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default InfoBlock;
