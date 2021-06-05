import axios from './../axios/axiosConfig';
import ValidationError from './../helpers/validationError';

const getCards = async (page = 1, count = 9) => {
  try {
    const errors = {
      success: false,
      message: 'Validation failed',
      fails: {
        count: [],
        page: [],
      },
    };

    if (page < 1) errors.fails.page.push('The page must be at least 1.');
    if (count % 1 !== 0)
      errors.fails.count.push('The count must be an integer.');
    if (errors.fails.count.length > 0 || errors.fails.page.length > 0)
      throw new ValidationError(null, errors);

    const response = await axios.get(`users?page=${page}&count=${count}`);
    console.log(response);

    return {
      response,
      loading: false,
    };
  } catch (err) {
    console.log(err.obj);
  }
};

export default getCards;
