import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

export const getToken = async (data: { username: string; password: string }):Promise<void> => {
  try {
    return await api.post(`/api-token-auth/`, data).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', data.username);
    });
  } catch (err) {
    console.error(err);
  }
};

export const isUser = (username: string):Promise<AxiosResponse<any>> | undefined => {
  try {
    return api.get(`/is_user/${username}/`).then((res) => {
      return res;
    });
  } catch (err) {
    console.error(err);
  }
};

export const isEmail = (email: string):Promise<AxiosResponse<any>> | undefined  => {
  try {
    return api.get(`/is_email/${email}/`).then((res) => {
      return res;
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeUser = ():Promise<AxiosResponse<any>> | undefined  => {
  const username = localStorage.getItem('user');
  const access_token = localStorage.getItem('token');
  try {
    return api
      .delete(`/user_remove/${username}/remove/`, {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      })
      .then((res) => {
        return res;
      });
  } catch (err) {
    console.error(err);
  }
};
