import axios from 'axios';

const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});

/**
 * API questions
 */

export const getAllQuestions = async () => {
  try {
    return await api.get(`translations/`).then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};


export const getQuestionById = async (id) => {
  return await api
    .get(`translations/questions/${id}`)

    .then(({ data }) => data['questions'])

    .catch((err) => console.log(err));
};