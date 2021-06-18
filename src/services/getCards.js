import axios from './../axios/axiosConfig';
import ValidationError from './../helpers/validationError';

const getCards = async (page = 1, count = 9) => {
  try {
    const response = await axios.get(`users?page=${page}&count=${count}`);

    if (response.data.users.length === 0) {
      throw new ValidationError({ message: 'No data available' });
    }

    return {
      data: response.data,
      loading: false,
    };
  } catch (err) {
    const errObj = {};

    if (err?.errObj?.message === 'No data available') {
      errObj['errObj'] = {
        message: 'No data available',
      };
    } else if (err.toJSON().message === 'Network Error') {
      errObj['errObj'] = {
        message: 'Network Error',
      };
    } else {
      errObj['errObj'] = err.response.data;
    }

    throw new ValidationError({
      ...errObj,
      loading: false,
    });
  }
};

export default getCards;
