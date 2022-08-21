import axios from "axios";
import {BASE_URL} from "./config";

export const getHouseIdByEmail = async (loggedUser) => {
  return await axios.get(`${BASE_URL}/houses/${loggedUser.email}`, {
    headers: {
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
    }
  });
}
