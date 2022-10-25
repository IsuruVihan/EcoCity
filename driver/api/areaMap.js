import axios from "axios";
import {BASE_URL} from "./config";

export const getGarbageHubDetails = async (loggedUser) => {
  return await axios.get(`${BASE_URL}/areaMap2`, {
    headers: {
      email: loggedUser.email,
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
    }
  });
}
