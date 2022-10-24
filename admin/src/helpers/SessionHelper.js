import React, {useEffect, useState} from 'react';

const useSessionHelper = () => {
    // const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem('loggedInUser'));
    //
    // useEffect(() => {
    //     console.log(loggedInUser);
    // }, [loggedInUser])
    //
    // const setLoginSession = (loggedInUser) => {
    //     setSession('loggedInUser', JSON.stringify(loggedInUser));
    //     setLoggedInUser(loggedInUser);
    // }

    const resetLoginSession = () => {
        sessionStorage.removeItem('loggedInUser');
    }
    const setSession = (key, value) => {
        sessionStorage.setItem(key, value);
    }

    const readSession = (key) => {
        sessionStorage.getItem(key);
    }

    return [readSession, resetLoginSession];
}


export default useSessionHelper;
