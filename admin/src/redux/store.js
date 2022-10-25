import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice';
import complaintReducer from './reducers/complaintsSlice';
import statReducer from './reducers/StatSlice';
import databaseReducer from './reducers/databaseSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        complaint: complaintReducer,
        stat: statReducer,
        database: databaseReducer
    },
})

export default store;
