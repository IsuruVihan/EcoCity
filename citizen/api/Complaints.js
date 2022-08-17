import axios from "axios";
import {BASE_URL} from "./config";

export const submitComplaint = async (formData, loggedUser) => {
  console.log("FORM DATA: ", formData);
  return await axios.post(`${BASE_URL}/complaints`, {
    category: formData.category,
    id: formData.id,
    description: formData.description,
    files: formData.file,
  }, {
    headers: {
      accessToken: loggedUser.accessToken,
      refreshToken: loggedUser.refreshToken,
      Accept: "multipart/form-data",
    }
  });
}
