import axios from 'axios';

export const checkServerStatus = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api');
    if (response.status === 200) {
      console.log('server is running....');
    }
  } catch (error) {
    console.error(error.message);
  }
};
export const getResponse = async (gameCode) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/getGameCode/${gameCode}`
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
