import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3003/`,
});

/**
 * API questions
 */

export const getAllQuestions = async () => {
  try {
    return await api.get(`/questions`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

export const getQuestionById = async (questionsId) => {
  return await api
    .get(`/questions/${questionsId}`)

    .then(({ data }) => data)

    .catch((err) => console.log(err));
};