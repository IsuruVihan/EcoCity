import axios from "axios";
import {BASE_URL} from "../../../api/config";

export const getInitial = async (accessToken, refreshToken, id) => {
    return await axios.get(`${BASE_URL}/gcj/initial`, {
        headers: {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    });
}
export const createCJ = async (accessToken, refreshToken, cj) => {
    return await axios.post(`${BASE_URL}/gcj/create`, {
        cj
    }, {
        headers: {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    });
}
