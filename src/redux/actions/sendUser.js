import axios from '../../axios/axiosConfig';
import ValidationError from './../../helpers/validationError';

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
    const errObj = {};

    if (err.toJSON().message === 'Network Error') {
      errObj['errObj'] = {
        message: 'Network Error',
      };
    } else {
      errObj['errObj'] = err.response.data;
    }

    return errObj;
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

      if (token.errObj) {
        throw new ValidationError(token.errObj);
      }

      const res =
        !token.errObj &&
        (await axios.post('users', formData, {
          headers: {
            Token: token.data.token,
          },
        }));

      if (res.data.success) {
        dispatch(sendUserSuccess({ ...res.data }));
      }
    } catch (err) {
      let errObj = null;

      if (err.errObj?.message === 'Network Error') {
        errObj = {
          message: 'Network Error',
        };
      } else {
        errObj = {
          ...err.response.data,
          status: err.response.status,
        };
      }

      dispatch(sendUserError(errObj));
    }
  };
};
