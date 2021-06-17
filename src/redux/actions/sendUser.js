import axios from '../../axios/axiosConfig';

import {
  SEND_USER_START,
  SEND_USER_ERROR,
  SEND_USER_SUCCESS,
} from './actionTypes';

export const sendUserStart = () => {
  return {
    type: SEND_USER_START,
  };
};

export const sendUserSuccess = payload => {
  return {
    type: SEND_USER_SUCCESS,
    sendUser: payload,
  };
};

export const sendUserError = payload => {
  return {
    type: SEND_USER_ERROR,
    error: payload,
  };
};

const getToken = async () => {
  try {
    const response = await axios.get('token');

    return response;
  } catch (err) {
    return err;
  }
};

export const sendUser = ({ name, email, phone, radioChecked: radio, file }) => {
  return async dispatch => {
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('position_id', radio);
      formData.append('photo', file);

      const token = await getToken();

      const res =
        token.data.token &&
        (await axios.post('users', formData, {
          headers: {
            Token: token.data.token,
          },
        }));

      if (res.data.success) {
        dispatch(sendUserSuccess({ ...res.data }));
      }
    } catch (err) {
      const errorObj = { ...err.response.data, status: err.response.status };

      dispatch(sendUserError(errorObj));
    }
  };
};
