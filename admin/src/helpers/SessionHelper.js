import React, {useEffect, useState} from 'react';


export const resetLoginSession = () => {
    sessionStorage.removeItem('loggedInUser');
}

export const setSession = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const readSession = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

export const readStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}



