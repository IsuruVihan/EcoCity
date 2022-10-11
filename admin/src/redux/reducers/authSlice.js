import {createSlice} from "@reduxjs/toolkit";
import {loginUser} from "../../pages/Login/api/api";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

export const login = createAsyncThunk('auth/login', async (obj) => {
    return loginUser(obj).then((res) => res);
})

let initialState = {
    isUserLoggedIn: false,
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
        logout: (status, action) => {

        }
        // login: (state, action) => {
        //     let isLoggedIn = false;
        //     //Add validations
        //
        //     //Login
        //     loginUser(action.payload).then((res) => {
        //         const loggedInUser = {
        //             email: res.data.email,
        //             accessToken: res.data.accessToken,
        //             refreshToken: res.data.refreshToken,
        //         };
        //         //If remembered save in local storage
        //
        //         //else save in session storage
        //         sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        //         isLoggedIn = true;
        //     })
        //     state.isUserLoggedIn = isLoggedIn;
        // }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {

        }
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;
