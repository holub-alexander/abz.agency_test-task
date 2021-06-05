import React from 'react';
import PropTypes from 'prop-types';

import formatStr from '../../helpers/formatStr';
import photoCover from '../../assets/icons/Photo-cover.svg';
import Heading from '../UI/Typography/Heading';
import Tooltip from '../UI/Tooltip/Tooltip';
import Image from './Image/Image';

const Card = ({ type, photo, name, position, email, phone }) => {
  return (
    <>
      {type === 'normal' ? (
        <div className="card">
          {!photo ? (
            <img src={photoCover} alt="Avatar" className="card__avatar" />
          ) : (
            <Image image={photo} />
          )}

          {name.length > 45 ? (
            <>
              <Tooltip type="normal" dataFor="card__name" />
              <Heading
                tag="h2"
                type="normal"
                className="card__name"
                dataFor="card__name"
                dataTip={`${name}`}
              >
                {formatStr(name, 45)}
              </Heading>
            </>
          ) : (
            <Heading tag="h2" type="normal" className="card__name">
              {name}
            </Heading>
          )}

          {position.length > 65 ? (
            <>
              <Tooltip type="normal" dataFor="card__prof" />
              <p
                type="normal"
                className="card__prof"
                data-for="card__prof"
                data-tip={position}
              >
                {formatStr(position, 65)}
              </p>
            </>
          ) : (
            <p type="normal" className="card__prof">
              {position}
            </p>
          )}

          {email.length > 25 ? (
            <>
              <Tooltip type="normal" dataFor="card__email" />
              <a
                href={`mailto:${email}`}
                data-for="card__email"
                data-tip={`${email}`}
                className="card__email"
              >
                {formatStr(email, 25)}
              </a>
            </>
          ) : (
            <a href={`mailto:${email}`} className="card__email">
              {email}
            </a>
          )}

          {phone ? (
            <a href={`tel:${phone.replace(/\s/gi, '')}`}>{phone}</a>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['normal']).isRequired,
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default Card;
