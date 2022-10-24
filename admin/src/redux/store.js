import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice';
import complaintReducer from './reducers/complaintsSlice';
import statReducer from './reducers/StatSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        complaint: complaintReducer,
        stat: statReducer
    },
})

export default store;
