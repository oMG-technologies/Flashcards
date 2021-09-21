import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

/**
 * API questions
 */

export const getAllLanguages = async ():Promise<any> => {
  try {
    return await api
      .get(`/available_conversions/`)
      .then(({ data }) => data.available_conversions);
      
  } catch (err) {
    console.log(err);
  }
};

export const getAllQuestionsByLanguage = async (languages:string):Promise<any> => {
  try {
    return await api
      .get(`translation/?conversion=${languages}`)
      .then(({ data }) => data);
  } catch (err) {
    console.log(err);
  }
};

