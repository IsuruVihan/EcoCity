import React, {useEffect, useState} from 'react';

const useLoginSessionHelper = () => {
    const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem('loggedInUser'));

    useEffect(() => {
        console.log(loggedInUser);
    }, [loggedInUser])

    const setLoginSession = (loggedInUser) => {
        setSession('loggedInUser', JSON.stringify(loggedInUser));
        setLoggedInUser(loggedInUser);
    }

    const resetLoginSession = () => {
        sessionStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    }
    const setSession = (key, value) => {
        sessionStorage.setItem(key, value);
    }

    const readSession = (key) => {
        sessionStorage.getItem(key);
    }

    return [loggedInUser, setLoginSession, resetLoginSession];
}


export default useLoginSessionHelper;
