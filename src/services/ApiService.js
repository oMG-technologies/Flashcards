import axios from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

/**
 * API questions
 */

export const getAllQuestions = async () => {
  try {
    return await api.get(`translations/`).then(({ data }) => data['questions']);
  } catch (err) {
    console.log(err);
  }
};

export const getQuestionById = async (questionsId) => {
  return await api
    .get(`translations/`)

    .then(({ data }) => data['questions'])

    .catch((err) => console.log(err));
};