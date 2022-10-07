import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    value: 0
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {

        }
    }
})

export const {login} = authSlice.actions;
export default authSlice.reducer;
