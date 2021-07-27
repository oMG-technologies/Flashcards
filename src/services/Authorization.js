import axios from 'axios';

const url = `http://127.0.0.1:8000/api-token-auth/`;

export const getToken = (data) =>
  axios
    .post(url, data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
