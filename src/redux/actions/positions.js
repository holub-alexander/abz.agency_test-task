import axios from '../../axios/axiosConfig';

import {
  FETCH_POSITIONS_START,
  FETCH_POSITIONS_SUCCESS,
  FETCH_POSITIONS_ERROR,
} from './actionTypes';

export const fetchPositionsStart = () => {
  return {
    type: FETCH_POSITIONS_START,
  };
};

export const fetchPositionsSuccess = payload => {
  return {
    type: FETCH_POSITIONS_SUCCESS,
    positions: payload.data,
  };
};

export const fetchPositionsError = payload => {
  return {
    type: FETCH_POSITIONS_ERROR,
    error: payload,
  };
};

export const fetchPositions = () => {
  return async dispatch => {
    dispatch(fetchPositionsStart);
    try {
      const response = await axios.get('positions');

      dispatch(fetchPositionsSuccess(response));
    } catch (err) {
      dispatch(fetchPositionsError(err));
    }
  };
};
