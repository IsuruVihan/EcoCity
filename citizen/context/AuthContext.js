import React, {createContext, useEffect, useState} from 'react';
import Toast from "react-native-toast-message";

import {getLoggedInUser, loginUser} from "../api/Login";
import {SetAsyncStorageItem} from "../helpers/SetAsyncStorageItem";
import {RemoveAsyncStorageItem} from "../helpers/RemoveAsyncStorageItem";
import {GetAsyncStorageItem} from "../helpers/GetAsyncStorageItem";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});
    const [rememberedUser, setRememberedUser] = useState(null);

    useEffect(() => {
        getRememberedUser();
        updateLoggedInUser();
    }, []);

    const login = (email, password, rememberMe) => {
        setLoading(true);
        if (email.length === 0 || password.length === 0) {
            setLoading(false);
            return Toast.show({
                type: 'error',
                text1: 'Incomplete user credentials',
                text2: 'Please insert email and password',
                topOffset: 10,
            });
        }
        if (rememberMe) {
            const tempRememberedUser = {
                email: email,
                password: password
            };
            SetAsyncStorageItem('REMEMBERED_USER', JSON.stringify(tempRememberedUser))
                .then(() => {
                    setRememberedUser(tempRememberedUser);
                });
        } else {
            RemoveAsyncStorageItem('REMEMBERED_USER')
                .then(() => {
                    setRememberedUser(null);
                });
        }
        const formData = {
            email: email,
            password: password
        };
        loginUser(formData)
            .then((res) => {
                const newUser = {
                    email: res.data.email,
                    accessToken: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                };
                SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(newUser))
                    .then(() => {
                        setLoggedUser(newUser);
                        setLoading(false);
                        Toast.show({
                            type: 'success',
                            text1: 'Welcome!',
                            text2: res.data.message,
                            topOffset: 10,
                        });
                    })
                    .catch((error) => {
                        setLoading(false);
                        Toast.show({
                            type: 'error',
                            text1: 'Oops!',
                            text2: 'Something went wrong when you try to login. Please try again.',
                            topOffset: 10,
                        });
                        console.log("LOGIN ERROR: ", error);
                    });
            })
            .catch((error) => {
                setLoading(false);
                console.log("LOGIN ERROR: ", error);
                Toast.show({
                    type: 'error',
                    text1: error.response.data.message,
                    topOffset: 10,
                });
            });
    }

    const logout = () => {
        setLoading(true);
        RemoveAsyncStorageItem('LOGGED_IN_USER')
            .then(() => {
                setLoggedUser({});
                setLoading(false);
                Toast.show({
                    type: 'success',
                    text1: 'Good bye!',
                    text2: 'You have logged out successfully!',
                    topOffset: 10,
                });
            })
            .catch((error) => {
                setLoading(false);
                Toast.show({
                    type: 'error',
                    text1: 'Oops!',
                    text2: 'Something went wrong when you try to logout. Please try again.',
                    topOffset: 10,
                });
                console.log("LOGOUT USER ERROR: ", error);
            });
    }

    const updateLoggedInUser = () => {
        setSplashLoading(true);
        console.log("LOGGED USER: ", loggedUser);
        if (loggedUser.email && loggedUser.accessToken && loggedUser.refreshToken) {
            getLoggedInUser(loggedUser.accessToken, loggedUser.refreshToken)
                .then((res1) => {
                    if (res1.data.email) {
                        if (res1.data.newAccessToken && res1.data.newRefreshToken) {
                            const tempUser = {
                                email: res1.data.email,
                                accessToken: res1.data.newAccessToken,
                                refreshToken: res1.data.newRefreshToken
                            };
                            SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                                .then(() => {
                                    setLoggedUser(tempUser);
                                    setSplashLoading(false);
                                });
                        }
                    } else {
                        setLoggedUser({});
                        setSplashLoading(false);
                        Toast.show({
                            type: 'error',
                            text1: 'Oops!',
                            text2: 'Something went wrong. Please login again.',
                            topOffset: 10,
                        });
                    }
                });
        } else {
            GetAsyncStorageItem('LOGGED_IN_USER')
                .then((user) => {
                    const userObj = JSON.parse(user);
                    console.log("USER: ", user);
                    if (userObj) {
                        console.log("USER OBJ EMAIL: ", userObj.email);
                        getLoggedInUser(userObj.accessToken, userObj.refreshToken)
                            .then((res) => {
                                if (res.data.email && (!res.data.newAccessToken) && (!res.data.newRefreshToken)) {
                                    const tempUser = {
                                        email: userObj.email,
                                        accessToken: userObj.accessToken,
                                        refreshToken: userObj.refreshToken
                                    };
                                    SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                                        .then(() => {
                                            setLoggedUser(tempUser);
                                            setSplashLoading(false);
                                        });
                                } else {
                                    if (res.data.email && res.data.newAccessToken && res.data.newRefreshToken) {
                                        const tempUser = {
                                            email: res.data.email,
                                            accessToken: res.data.newAccessToken,
                                            refreshToken: res.data.newRefreshToken
                                        };
                                        SetAsyncStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                                            .then(() => {
                                                setLoggedUser(tempUser);
                                                setSplashLoading(false);
                                            });
                                    } else {
                                        RemoveAsyncStorageItem('LOGGED_IN_USER')
                                            .then(() => {
                                                setLoggedUser({});
                                                setSplashLoading(false);
                                            });
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Oops!',
                                            text2: 'You are not authorized. Please login.',
                                            topOffset: 10,
                                        });
                                    }
                                }
                            });
                    } else {
                        RemoveAsyncStorageItem('LOGGED_IN_USER')
                            .then(() => {
                                setLoggedUser({});
                                setSplashLoading(false);
                            });
                        Toast.show({
                            type: 'error',
                            text1: 'Oops!',
                            text2: 'You are not authorized. Please login.',
                            topOffset: 10,
                        });
                    }
                });
        }
    }

    const getRememberedUser = () => {
        GetAsyncStorageItem('REMEMBERED_USER')
            .then((remUser) => {
                const remUserObj = JSON.parse(remUser);
                if (remUserObj) {
                    const tempRememberedUser = {
                        email: remUserObj.email,
                        password: remUserObj.password
                    };
                    setRememberedUser(tempRememberedUser);
                } else {
                    setRememberedUser(null);
                }
            });
    }

    return (
        <AuthContext.Provider value={{
            loading: loading,
            splashLoading: splashLoading,
            loggedUser: loggedUser,
            rememberedUser: rememberedUser,
            login: login,
            logout: logout
        }}>{children}</AuthContext.Provider>
    );
}
