import axios from "axios";

export const createRecord = async ({player, reason, borrowDate, returnDate, quantities}, accessToken, refreshToken) => {
    return await axios.post(`${process.env.REACT_APP_API}/borrow`, {
        player: player,
        reason: reason,
        borrowDate: borrowDate,
        returnDate: returnDate,
        quantities: quantities
    }, {
        headers: {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    });
}