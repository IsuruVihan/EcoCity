import axios from "axios";
import {BASE_URL} from "../../../../api/config";

export const getHubs = async (accessToken, refreshToken) => {
  return await axios.get(`${BASE_URL}/hub/all`, {
    headers: {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });
}






//
// export const createRecord = async ({player, reason, borrowDate, returnDate, quantities}, accessToken, refreshToken) => {
//   return await axios.post(`${process.env.REACT_APP_API}/borrow`, {
//     player: player,
//     reason: reason,
//     borrowDate: borrowDate,
//     returnDate: returnDate,
//     quantities: quantities
//   }, {
//     headers: {
//       accessToken: accessToken,
//       refreshToken: refreshToken
//     }
//   });
// }
//
// export const getBorrowRecords = async (accessToken, refreshToken) => {
//   return await axios.get(`${process.env.REACT_APP_API}/borrow`, {
//     headers: {
//       accessToken: accessToken,
//       refreshToken: refreshToken
//     }
//   });
// }
//
// export const returnEquipments = async (borrowRecordId, borrowedOn, returnedOn, accessToken, refreshToken) => {
//   return await axios.put(`${process.env.REACT_APP_API}/borrow/return/${borrowRecordId}`, {
//     borrowedOn: borrowedOn,
//     returnedOn: returnedOn
//   }, {
//     headers: {
//       accessToken: accessToken,
//       refreshToken: refreshToken
//     }
//   });
// }
