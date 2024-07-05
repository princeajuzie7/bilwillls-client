"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthInterface } from "@/types";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  globalLoading: true,
  error: null,
  navigatetoverify:false,
};

 type PayloadAction<P = void, T extends string = string, M = never, E = never> = {
    payload: P;
    type: T;
} & ([M] extends [never] ? {} : {
    meta: M;
}) & ([E] extends [never] ? {} : {
    error: E;
})

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthInterface>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.globalLoading = false;
      state.error = null;
      // state.navigatetoverify = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setGlobalLoading(state, action: PayloadAction<boolean>) { 
      state.globalLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    setNavigatetoverify(state, action: PayloadAction<boolean>) {
      state.navigatetoverify = action.payload;
    },
    logOut(state) {
      state.user = null;
      state.error = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  setUser,
  setLoading,
  logOut,
  setError,
  setGlobalLoading,
  setNavigatetoverify,
} = authSlice.actions;
export const authreducers = authSlice.reducer;
