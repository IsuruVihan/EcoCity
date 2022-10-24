import React, {useEffect, useState} from 'react';


export const resetLoginSession = () => {
    sessionStorage.removeItem('loggedInUser');
}

export const setSession = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const readSession = (key) => {
    sessionStorage.getItem(key);
}



