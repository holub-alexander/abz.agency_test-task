import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Radio from '../UI/Radio/Radio';
import Font from './../UI/Typography/Font';
import Preloader from './../UI/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPositions } from '../../redux/actions/positions';

const SelectPos = ({ title, setRadioChecked }) => {
  const [positionsBlock, setPositionsBlock] = React.useState(null);

  const positions = useSelector(state => state.positionsReducer);
  const dispatch = useDispatch();

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
    dispatch(fetchPositions());

    if (!positions.loading) {
      setPositionsBlock(createPositions(positions.results.positions));
    }
    // eslint-disable-next-line
  }, [positions.loading]);

  return (
    <div className="select-pos">
      <Font type="normal" className="select-pos__title">
        {title}
      </Font>

      <div className="select-pos__radio">
        {positions.loading ? <Preloader /> : positionsBlock}
      </div>
    </div>
  );
};

SelectPos.propTypes = {
  title: PropTypes.string.isRequired,
  setRadioChecked: PropTypes.func,
};

export default SelectPos;
