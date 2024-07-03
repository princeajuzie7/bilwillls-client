"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, AuthInterface } from "@/types";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  navigatetoverify:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthInterface>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.navigatetoverify = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    logOut(state) {
      state.user = null;
      state.error = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { setUser, setLoading, logOut, setError } = authSlice.actions;
export const authreducers = authSlice.reducer;
