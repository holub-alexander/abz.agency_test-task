import {
  SEND_USER_START,
  SEND_USER_ERROR,
  SEND_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  sendUser: null,
};

const positions = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_START:
      return {
        ...state,
      };
    case SEND_USER_SUCCESS:
      return {
        ...state,
        sendUser: action.sendUser,
      };
    case SEND_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default positions;
