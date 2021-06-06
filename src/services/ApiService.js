import axios from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

/**
 * API questions
 */

export const getAllLanguages = async () => {
  try {
    return await api
      .get(`translation/?languages_list`)
      .then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllQuestions = async(languages) => {
  try {
    return await api
      .get(`translation/?conversion=${languages}`)
      .then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};
