import {createSelector} from "reselect"

import { RootState } from "@/store"


const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
    [selectAuthState],
     (auth)=> auth.isAuthenticated 
)


export const selectUser = createSelector(
    [selectAuthState],
    (auth)=> auth.user 
)


export const selectGlobalLoading = createSelector(
  [selectAuthState],
  (auth)=> auth.globalLoading
)

export const selectError = createSelector(
  [selectAuthState],
  (auth) => auth.error
);

export const selectLoading = createSelector(
  [selectAuthState],
  (auth)=> auth.loading
)

export const selectnavigatetoverify = createSelector(
  [selectAuthState],
 (auth) => auth.navigatetoverify
)