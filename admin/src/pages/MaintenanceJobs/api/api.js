import axios from "axios";
import {BASE_URL} from "../../../api/config";

export const getInitial = async (accessToken, refreshToken, id) => {
  return await axios.get(`${BASE_URL}/mj/initial`, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}

export const createMJ = async (accessToken, refreshToken, mj) => {
  return await axios.post(`${BASE_URL}/mj/create`, {
    mj
  }, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}

export const getAllMJobs = async (accessToken, refreshToken, id) => {
  return await axios.get(`${BASE_URL}/mj/all`, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}
