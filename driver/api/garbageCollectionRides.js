import axios from "axios";
import {BASE_URL} from "./config";

export const getGCRJobDetails = async (loggedUser) => {
  // console.log('HELLO');
  return await axios.get(`${BASE_URL}/gcr`, {
    headers: {
      email: loggedUser.email,
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
    }
  });
}
