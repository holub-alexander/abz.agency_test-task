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

const buildCards = response => {
  return response.data.users.map(card => {
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
};

const OurUsers = ({ title, descr }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [cards, setCards] = React.useState(null);
  const [pageNum, setPageNum] = React.useState(2);
  const [totalPages, setTotalPages] = React.useState(1);
  const windowSize = useWindowSize();
  const [typeBlockCards, setTypeBlockCards] = React.useState([
    'our-users__cards',
  ]);

  const sendUserData = useSelector(state => state.sendUserReducer);

  React.useEffect(() => {
    let countCards = 9;

    if (windowSize.width < 1024) countCards = 6;
    if (windowSize.width < 768) countCards = 3;

    if (countCards === 9) setTypeBlockCards('our-users__cards--big');
    if (countCards === 6) setTypeBlockCards('our-users__cards--medium');
    if (countCards === 3) setTypeBlockCards('our-users__cards--small');

    getCards(1, countCards)
      .then(res => {
        setLoading(res.loading);
        setPageNum(1);
        setTotalPages(res.response.data.total_pages);
        setCards(buildCards(res.response));
      })
      .catch(err => console.log(err));
  }, [sendUserData, windowSize.width]);

  const showMoreClickHanlder = () => {
    let countCards = 9;

    if (windowSize.width < 1024) countCards = 6;
    if (windowSize.width < 768) countCards = 3;

    setLoading(true);

    getCards(pageNum + 1, countCards)
      .then(res => {
        setLoading(res.loading);
        setPageNum(pageNum + 1);
        setCards(buildCards(res.response));
      })
      .catch(err => console.log(err));
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
      <div className={`our-users__cards ${typeBlockCards}`}>
        {isLoading ? <Preloader /> : cards}
      </div>
      <div className="our-users__btn">
        {pageNum <= totalPages ? (
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
