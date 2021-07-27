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
      .get(`/available_conversions/`)
      .then(({ data }) => data.available_conversions);
  } catch (err) {
    console.log(err);
  }
};

export const getAllQuestionsByLanguage = async (languages) => {
  try {
    return await api
      .get(`translation/?conversion=${languages}`)
      .then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

