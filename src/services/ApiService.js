import axios from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

/**
 * API questions
 */

export const getAllQuestions = async () => {
  try {
    return await api.get(`translation/?conversion=en-pl`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};
