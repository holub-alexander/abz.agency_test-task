import {
  SEND_USER_START,
  SEND_USER_ERROR,
  SEND_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  sendUser: null,
  success: false,
};

const sendUser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_START:
      return {
        ...state,
      };
    case SEND_USER_SUCCESS:
      return {
        ...state,
        sendUser: action.sendUser,
        success: true,
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

export default sendUser;
