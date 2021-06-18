import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Heading from '../UI/Typography/Heading';
import Card from '../Card/Card';
import useWindowSize from './../../hooks/useWindowSize';
import getCards from '../../services/getCards';
import Button from './../UI/Button/Button';
import Font from './../UI/Typography/Font';
import Preloader from '../UI/Preloader/Preloader';

const OurUsers = ({ title, descr }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [cards, setCards] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(null);
  const [error, setErrors] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const windowSize = useWindowSize();
  const sendUserData = useSelector(state => state.sendUserReducer.sendUser);

  const buildCards = data => {
    const res = data.map(card => {
      const { id, name, email, position, photo, phone } = card;

      return (
        <Card
          type="normal"
          key={id}
          name={name}
          email={email}
          photo={photo}
          phone={phone}
          position={position}
        />
      );
    });

    const newCards = [...cards, ...res];

    setCards(newCards);
  };

  React.useEffect(() => {
    let countCards = 9;

    if (windowSize.width < 1024) countCards = 6;
    if (windowSize.width < 768) countCards = 3;

    if (pageNum > 1) {
      setIsOpen(true);
    }

    if (userData && isOpen) {
      countCards = 6;
    }

    getCards(pageNum === 0 ? 1 : pageNum, countCards)
      .then(res => {
        setLoading(res.loading);
        setTotalPages(res.data.total_pages);
        setErrors(null);
        setUserData(null);

        buildCards(res.data.users);
      })
      .catch(err => {
        setLoading(err.errObj.loading);
        setErrors(err.errObj.errObj);
      });
    // eslint-disable-next-line
  }, [pageNum]);

  React.useEffect(() => {
    if (sendUserData) {
      setPageNum(1);
      setCards([]);
      setUserData(sendUserData);
    }
  }, [sendUserData]);

  const showMoreClickHanlder = () => {
    if (navigator.onLine) {
      setPageNum(pageNum + 1);
    }
  };

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
      <div className={`our-users__cards`}>
        {error ? (
          <div className="our-users__errors-box">
            <Font type="normal">
              {error.message}

              {error?.fails ? (
                <ul>
                  {error.fails.count ? (
                    <li>
                      Count:
                      <ul>
                        {error.fails.count.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ) : null}
                  {error.fails.page ? (
                    <li>
                      Page:
                      <ul>
                        {error.fails.page.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ) : null}
                </ul>
              ) : null}
            </Font>
          </div>
        ) : null}

        {isLoading ? <Preloader /> : cards}
      </div>
      <div className="our-users__btn">
        {pageNum < totalPages ? (
          <Button type="yellow" clickHandler={showMoreClickHanlder}>
            <Font type="normal">Show more</Font>
          </Button>
        ) : (
          <div style={{ height: '50px' }}></div>
        )}
      </div>
    </div>
  );
};

OurUsers.propTypes = {
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
};

export default OurUsers;
