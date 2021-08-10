import axios from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

export const register = async (data: {
  email: any;
  username: string;
  password: any;
  repeatPassword: any;
}) => {
  try {
    const headers: any = { 'content-type': 'application/json' };
    const response = await api.put('/user_create/user/add/', data, headers);
    console.log(response.status);
    return response.data;
  } catch (error) {
    return error;
  }
};
