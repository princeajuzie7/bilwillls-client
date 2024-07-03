"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authreducers } from "@/reducers";
import createSagaMidlleware from "redux-saga"
import { applyMiddleware } from "redux";
import RootSaga from "@/saga";
const sagaMiddleware = createSagaMidlleware()

export const makeStore = () => { 

  const store =  configureStore({
    reducer: {
      auth: authreducers,
    },
    middleware: (getdefaultmidleware) => getdefaultmidleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production"
  });
  sagaMiddleware.run(RootSaga);
  return store
}


export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch =  AppStore["dispatch"];


export default makeStore;
