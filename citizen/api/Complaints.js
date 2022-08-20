import axios from "axios";
import {BASE_URL} from "./config";

export const submitComplaint = async (formData, loggedUser) => {
  return await axios.post(`${BASE_URL}/complaints`, {
    category: formData.category,
    id: formData.id,
    description: formData.description,
    files: formData.file,
    HouseId: formData.HouseId,
  }, {
    headers: {
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
      Accept: "multipart/form-data",
    }
  });
}

export const getComplaintsByUserId = async (id, loggedUser) => {
  return await axios.get(`${BASE_URL}/complaints/${id}`, {
    headers: {
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
    }
  });
}
