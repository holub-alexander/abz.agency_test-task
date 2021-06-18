import axios from '../../axios/axiosConfig';
import ValidationError from './../../helpers/validationError';

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

      if (response.data.positions.length === 0) {
        throw new ValidationError({ message: 'No data available' });
      }

      dispatch(fetchPositionsSuccess(response));
    } catch (err) {
      let errObj = null;

      if (err.errObj?.message === 'Network Error') {
        errObj = {
          message: 'Network Error',
        };
      } else if (err.errObj?.message === 'No data available') {
        errObj = {
          message: 'No data available',
        };
      } else {
        errObj = {
          ...err.response.data,
          status: err.response.status,
        };
      }

      dispatch(fetchPositionsError(errObj));
    }
  };
};
