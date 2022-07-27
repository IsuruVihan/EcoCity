import axios from "axios";

const url = 'http://192.168.1.227:3001/api';

export const loginUser = async ({email, password}) => {
  return await axios.post(`http://192.168.103.61:3001/api/login`, {
    type: 'citizen',
    email: email,
    password: password,
  });
}

export const getLoggedInUser = async (accessToken, refreshToken) => {
  return await axios.post(`http://192.168.103.61:3001/api/login/current`, {}, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}
