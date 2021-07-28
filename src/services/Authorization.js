import axios from 'axios';

const url = `https://words-translation.herokuapp.com/api-token-auth/`;
// const url1 = `https://words-translation.herokuapp.com/user_progress/`;

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
