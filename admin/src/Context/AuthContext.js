import React, {createContext, useEffect, useState} from 'react';
import Toast from "../common/Toast";

import {getLoggedInUser, loginUser} from "../pages/Login/api/api";
import {SetLocalStorageItem} from "../helpers/SetLocalStorageItem";
import {RemoveLocalStorageItem} from "../helpers/RemoveLocalStorageItem";
import {GetLocalStorageItem} from "../helpers/GetLocalStorageItem";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});
    const [rememberedUser, setRememberedUser] = useState(null);

    useEffect(() => {
        // getRememberedUser();
        updateLoggedInUser();
    }, []);

    const login = (email, password, rememberMe) => {
        setLoading(true);
        if (email.length === 0 || password.length === 0) {
            setLoading(false);
            return Toast('error', 'Incomplete user credentials, Please insert email and password');
        }
        if (rememberMe) {
            const tempRememberedUser = {
                email: email,
                password: password
            };
            SetLocalStorageItem('REMEMBERED_USER', JSON.stringify(tempRememberedUser))
                .then(() => {
                    setRememberedUser(tempRememberedUser);
                });
        } else {
            RemoveLocalStorageItem('REMEMBERED_USER')
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
                SetLocalStorageItem('LOGGED_IN_USER', JSON.stringify(newUser))
                    .then(() => {
                        setLoggedUser(newUser);
                        setLoading(false);
                        Toast('success', 'Welcome!');
                    })
                    .catch((error) => {
                        setLoading(false);
                        Toast('error', 'Oops! Something went wrong when you try to login. Please try again.');
                        console.log("LOGIN ERROR: ", error);
                    });
            })
            .catch((error) => {
                setLoading(false);
                console.log("LOGIN ERROR: ", error);
                Toast( 'error', error.response.data.message);
            });
    }

    const logout = () => {
        setLoading(true);
        RemoveLocalStorageItem('LOGGED_IN_USER')
            .then(() => {
                setLoggedUser({});
                setLoading(false);
                Toast('success', 'Good bye!You have logged out successfully!');
            })
            .catch((error) => {
                setLoading(false);
                Toast('error', 'Oops!Something went wrong when you try to logout. Please try again.');
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
                            SetLocalStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                                .then(() => {
                                    setLoggedUser(tempUser);
                                    setSplashLoading(false);
                                });
                        }
                    } else {
                        setLoggedUser({});
                        setSplashLoading(false);
                        Toast('error', 'Oops!Something went wrong. Please login again.');
                    }
                });
        } else {
            GetLocalStorageItem('LOGGED_IN_USER')
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
                                    SetLocalStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
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
                                        SetLocalStorageItem('LOGGED_IN_USER', JSON.stringify(tempUser))
                                            .then(() => {
                                                setLoggedUser(tempUser);
                                                setSplashLoading(false);
                                            });
                                    } else {
                                        RemoveLocalStorageItem('LOGGED_IN_USER')
                                            .then(() => {
                                                setLoggedUser({});
                                                setSplashLoading(false);
                                            });
                                        Toast( 'error', 'Oops!You are not authorized. Please login.');
                                    }
                                }
                            });
                    }
                    else {
                        RemoveLocalStorageItem('LOGGED_IN_USER')
                            .then(() => {
                                setLoggedUser({});
                                setSplashLoading(false);
                            });
                        Toast('error', 'Oops!You are not authorized. Please login.');
                    }
                })
                .catch((error) => {
                    console.log('hello')
                })
        }
    }

    const getRememberedUser = () => {
        GetLocalStorageItem('REMEMBERED_USER')
            .then((remUser) => {
                if(remUser != null){
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
                }

            }).catch( (error)=> {
                console.log(error)
        })
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
