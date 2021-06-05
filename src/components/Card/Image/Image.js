import React from 'react';
import axios from './../../../axios/axiosConfig';

import photoCover from '../../../assets/icons/Photo-cover.svg';

const Image = ({ image }) => {
  const [avatar, setAvatar] = React.useState(
    <img src={photoCover} alt="Avatar" className="card__avatar" />
  );
  console.log(avatar);
  React.useEffect(() => {
    axios
      .get(`${image}`)
      .then(() =>
        setAvatar(<img src={image} alt="Avatar" className="card__avatar" />)
      )
      .catch(err => {
        console.log(err);
      });
  }, [image]);

  return avatar;
};

export default Image;
