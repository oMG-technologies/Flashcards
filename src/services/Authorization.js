import axios from 'axios';

const api = axios.create({
  baseURL: `https://words-translation.herokuapp.com/`,
});

// const url_auth = `https://words-translation.herokuapp.com/api-token-auth/`;
// const url1 = `https://words-translation.herokuapp.com/user_progress/`;

export const getToken = async (data) => {
  try {
    return await api.post(`/api-token-auth/`, data).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', data.username);
    });
  } catch (err) {
    console.error(err);
  }
};

const url_is_user = `https://words-translation.herokuapp.com/is_user/`;

// export const isUser = (username) => axios.get(`${username}`);
// export const getAccessToApplication = (access_token) =>
//   axios
//     .get(url1, {
//       headers: {
//         Authorization: `Token ${access_token}`,
//       },
//     })
//     .then((res) => {
//       console.log('response from getAccess', res.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
