import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice';
import complaintReducer from './reducers/complaintsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        complaint: complaintReducer
    },
})

export default store;
