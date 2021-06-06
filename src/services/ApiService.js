import axios from 'axios';

const api = axios.create({
  // baseURL: `https://words-translation.herokuapp.com/`,
  baseURL: `http://127.0.0.1:8000/`,
});

/**
 * API questions
 */

export const getAllQuestions = async () => {
  try {
    return await api.get(`translation/?conversion=en-de`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};
