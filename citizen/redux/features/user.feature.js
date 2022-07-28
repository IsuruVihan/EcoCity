import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    accessToken: '',
    refreshToken: ''
  }
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.user = action.payload;
    },
    logoutReducer: (state) => {
      state.user = initialState;
    },
  },
});

export const {loginReducer, logoutReducer} = userSlice.actions;
export default userSlice.reducer;
