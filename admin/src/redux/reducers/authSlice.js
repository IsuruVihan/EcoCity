import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getLoggedInUser, loginUser} from "../../pages/Login/api/api";
import {useNavigate} from "react-router";
import {resetLoginSession} from "../../helpers/SessionHelper";
import {useEffect} from "react";


export const login = createAsyncThunk(
    'auth/login',
    async (userDetails, {rejectWithValue}) => {
        try {
            const response = await loginUser(userDetails);
            response.data.rememberMe = userDetails.rememberMe;
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

export const loginRememberedUser = createAsyncThunk(
    'auth/login/current',
    async (rememberedUser) => {
        const response = await getLoggedInUser(rememberedUser.accessToken, rememberedUser.refreshToken);
        return response.data;
    }
)

const registerLogin = (state, action) => {
    const data = action.payload;
    const loggedInUser = {
        email: data.email,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
    };
    //If remembered save in local storage
    if (data.rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify(loggedInUser));
    }

    //else save in session storage
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    state.loggedUser = loggedInUser;
    state.isUserLoggedIn = true;
}

let initialState = {
    isUserLoggedIn: false,
    loggedUser: {
        email: null,
            accessToken: null,
        refreshToken: null
    },
    isError: false,
    errorMessage: null
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            resetLoginSession();
            state.isUserLoggedIn = false;
            state.loggedUser = null;
        },
        resetErrors: (state, action) => {
            state.isError = false;
            state.errorMessage = null;
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
            registerLogin(state, action);
        },
        [login.rejected]: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload.message;
        },
        [loginRememberedUser.fulfilled]: (state, action) => {
            registerLogin(state, action);
        }
    }
})

export const {logout, resetErrors} = authSlice.actions;
export default authSlice.reducer;
