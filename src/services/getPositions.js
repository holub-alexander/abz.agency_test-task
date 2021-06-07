import axios from '../axios/axiosConfig';

const getPositions = async () => {
  try {
    const response = await axios.get('positions');

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default getPositions;
