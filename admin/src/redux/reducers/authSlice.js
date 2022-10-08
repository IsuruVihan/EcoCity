import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../pages/Login/api/api";


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
        login: (state, action) => {
            //Add validations

            //Login
            loginUser(action.payload).then((res) => {
                const newUser = {
                    email: res.data.email,
                    accessToken: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                };
                console.log(newUser);
            })
        }
    }
})

export const {login} = authSlice.actions;
export default authSlice.reducer;
