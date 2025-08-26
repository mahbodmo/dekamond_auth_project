import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/user";

type AuthState = {
  access_token: string | null;
  user: UserType | null;
};

const initialState: AuthState = {
  access_token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<UserType>) {
      state.access_token = action.payload.login.sha256;
      state.user = action.payload;
    },
    logOut(state) {
      state.access_token = initialState.access_token;
      state.user = initialState.user;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;

export default authSlice;
