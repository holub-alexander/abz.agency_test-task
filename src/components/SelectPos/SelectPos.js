import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Radio from '../UI/Radio/Radio';
import Font from './../UI/Typography/Font';
import getPositions from '../../services/getPositions';
import Preloader from './../UI/Preloader/Preloader';

const SelectPos = ({ title, setRadioChecked }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [positions, setPositions] = React.useState(null);

  const createPositions = positionsData => {
    return positionsData.map((position, index) => (
      <Radio
        name="positions"
        value={position.id}
        label={position.name}
        radioIndex={index}
        setRadioChecked={setRadioChecked}
        key={uuidv4()}
      />
    ));
  };

  React.useEffect(() => {
    getPositions()
      .then(res => {
        setIsLoading(false);
        setPositions(createPositions(res.data.positions));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="select-pos">
      <Font type="normal" className="select-pos__title">
        {title}
      </Font>

      <div className="select-pos__radio">
        {isLoading ? <Preloader /> : positions}
      </div>
    </div>
  );
};

SelectPos.propTypes = {
  title: PropTypes.string.isRequired,
  setRadioChecked: PropTypes.func,
};

export default SelectPos;
