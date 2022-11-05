import axios from "axios";
import {BASE_URL} from "./config";

export const getGarbageHubDetails = async (loggedUser) => {
  return await axios.get(`${BASE_URL}/areaMap`, {
    headers: {
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
      email: loggedUser.email,
    }
  });
}
