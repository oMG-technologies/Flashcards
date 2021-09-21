import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const register = async (data: {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}):Promise<any> => {
  try {
    const headers: any = { 'content-type': 'application/json' };
    const response = await api.post('/user_create/user/add/', data, headers);
    console.log(response.status);
    return response.data;
  } catch (error) {
    return error;
  }
};
