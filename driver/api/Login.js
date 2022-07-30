import axios from "axios";
import {BASE_URL} from "./config";

export const loginUser = async ({email, password}) => {
  return await axios.post(`${BASE_URL}/login`, {
    type: 'driver',
    email: email,
    password: password,
  });
}

export const getLoggedInUser = async (accessToken, refreshToken) => {
  return await axios.post(`${BASE_URL}/login/current`, {}, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}
