import axios from 'axios';

const url = `https://words-translation.herokuapp.com/user_create/user/add/`;
const headers = { 'content-type': 'application/json' };

export const register = (data) =>
  axios
    .put(url, data, headers)
    .then((res) => 
      res.data
      // console.log('response from register', res.data);
      // console.log('register as ', data.username);
    )
    .catch((error) => {
      console.error(error);
    });
