import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Radio from '../UI/Radio/Radio';
import Font from './../UI/Typography/Font';
import Preloader from './../UI/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPositions } from '../../redux/actions/positions';

const SelectPos = props => {
  const { title = '', setRadioChecked, errors = [], setIsFormWorking } = props;
  const [positionsBlock, setPositionsBlock] = React.useState(null);
  const [localErrors, setLocalErrors] = React.useState(null);

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
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!positions.loading && !positions.error) {
      setPositionsBlock(createPositions(positions.results.positions));
    }

    if (positions.error) {
      setLocalErrors([positions.error.message]);
      setIsFormWorking(false);
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

      <p className="select-pos__helper">
        {errors.join(' ') || localErrors?.join(' ') || null}
      </p>
    </div>
  );
};

SelectPos.propTypes = {
  title: PropTypes.string.isRequired,
  setRadioChecked: PropTypes.func,
  errors: PropTypes.array,
  setIsFormWorking: PropTypes.func,
};

export default SelectPos;
