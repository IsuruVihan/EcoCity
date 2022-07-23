import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: ''
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = '';
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
