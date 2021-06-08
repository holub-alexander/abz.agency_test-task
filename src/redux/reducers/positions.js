import {
  FETCH_POSITIONS_START,
  FETCH_POSITIONS_SUCCESS,
  FETCH_POSITIONS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  results: null,
  error: null,
};

const positions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSITIONS_START:
      return {
        ...state,
      };
    case FETCH_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.positions,
      };
    case FETCH_POSITIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default positions;
