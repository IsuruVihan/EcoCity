import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    loggedInUser: {
        email: null,
        accessToken: null,
        refreshToken: null
    }
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, payload) => {

        }
    }
})

export const {login} = authSlice.actions;
export default authSlice.reducer;
