import axios from 'axios';

const url = 'string';

export const getToken = (username, password) =>
  axios
    .post(url, {
      data: {
        username: username,
        password: password,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
