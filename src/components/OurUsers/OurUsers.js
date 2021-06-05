import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../UI/Typography/Heading';
import Card from '../Card/Card';

const OurUsers = ({ title, descr }) => {
  return (
    <div className="our-users__content">
      <div className="our-users__head">
        <Heading tag="h1" type="normal" className="our-users__title">
          {title}
        </Heading>
        {descr !== '' ? (
          <Heading tag="h2" type="normal" className="our-users__descr">
            {descr}
          </Heading>
        ) : null}
      </div>
      <div className="our-users__cards">
        <Card
          type="normal"
          name="Salvador Stewart Flynn Thomas Salva Obed Harri Salvador Stewart"
          position="Leading specialist of the department of control over the biggest Salvador Stewart"
          email="JeromeKlarkaJeromeKlarka@SalvadorStewart"
          phone="+38 (098) 278 76 24"
        />
        <Card
          type="normal"
          name="Takamaru Ayako Jurrien"
          position="Lead Independent Director "
          email="Takamuru@gmail.com"
          phone="+38 (098) 278 90 24"
        />
      </div>
    </div>
  );
};

OurUsers.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
};

export default OurUsers;
