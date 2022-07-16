import { combineReducers } from 'redux';

import adminReducer from "./adminReducer";

const rootReducer = combineReducers({
  admin: adminReducer
});

export default rootReducer;
