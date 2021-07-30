import axios from 'axios';

const url = `https://words-translation.herokuapp.com/api-token-auth/`;
// const url1 = `https://words-translation.herokuapp.com/user_progress/`;

export const getToken = async (data) => {
  return await axios
    .post(url, data)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', data.username);
    })
    .catch((error) => {
      console.error(error);
    });
};
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
