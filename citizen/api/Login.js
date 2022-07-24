import axios from "axios";

export const loginUser = async ({email, password}) => {
  return await axios.post(`http://localhost:3001/api/login`, {
    type: 'citizen',
    email: email,
    password: password,
  });
}
