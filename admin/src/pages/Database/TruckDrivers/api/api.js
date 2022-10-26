import axios from "axios";
import {BASE_URL} from "../../../../api/config";

export const getDrivers = async (accessToken, refreshToken) => {
  return await axios.get(`${BASE_URL}/driver/all`, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}
