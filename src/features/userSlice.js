import { createSlice } from '@reduxjs/toolkit';
import { login } from '../services/login';

const initialState = {
  loggedIn: false,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.loggedIn = false;
      state.token = null;
    },
    setCredentials(state, action) {
      state.loggedIn = true;
      state.token = action.payload.token;
    },
  },
});

export const { logout, setCredentials } = userSlice.actions;
export const loginUser = (credentials) => {
  return async (dispatch) => {
    const userToken = await login(credentials);
    dispatch(setCredentials(userToken));
  };
};

export default userSlice.reducer;
