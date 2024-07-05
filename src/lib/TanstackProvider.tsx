"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {AppDispatch} from "@/store"
import RingLoader from "react-spinners/RingLoader";
import { GetCurrentUserRequest } from "@/saga/AuthSaga";
import {
  selectIsAuthenticated,
  selectGlobalLoading,
  selectUser,
} from "@/selectors/AuthSelectors";
export  function TanstackProvider({children}: {children: React.ReactNode}) {
    const client = new QueryClient();
    const dispatch = useDispatch<AppDispatch>()
     const loading = useSelector(selectGlobalLoading);
    React.useEffect(() => {
      dispatch(GetCurrentUserRequest());
    }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <RingLoader color="#3EE783" size={50} />
      </div>
    )
  }
  
    return (
        <QueryClientProvider client={client}>
            <ReactQueryDevtools initialIsOpen={false} />
               {children}
        </QueryClientProvider>
    )
}

export default TanstackProvider;