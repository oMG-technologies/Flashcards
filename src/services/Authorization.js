import axios from 'axios';

const url = `http://127.0.0.1:8000/api-token-auth/`;

export const getToken = (data) =>
  axios
    .post(url, data)
    .then((res) => {
      console.log('response from getToken',res.data);
      localStorage.setItem('token', res.data.token);
    })
    .catch((error) => {
      console.error(error);
    });



export const getAccessToGame = (access_token) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Token ${access_token}`,
      },
    })
    .then((res) => {
      console.log('response from getAccess', res.data);
    })
    .catch((error) => {
      console.error(error);
    });
