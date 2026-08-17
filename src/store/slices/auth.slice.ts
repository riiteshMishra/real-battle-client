import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH, USER } from "../types";

// INITIAL STATE
const initialState: AUTH = {
  isLoading: false,
  isAuthenticated: false,
  currentUser: null,
};

// AUTH SLICE
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    loginSuccess: (state, action: PayloadAction<USER>) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    // LOGOUT
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.isLoading = false;
    },
    // MANAGE LOADING-STATE
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, setLoading } = authSlice.actions;
export default authSlice.reducer;
