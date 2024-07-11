"use client";
import { apiResponse } from "@/utils";
import { AuthInterface, ForgotPasswordInt, UpdatePasswordInt } from "@/types";
import React from "react";
import { enqueueSnackbar, closeSnackbar } from "notistack";


type UserCredentials = {
  username?: string;
  email?: string;
  password?: string;
};

export class AuthServices extends React.Component {

  static async signup(
    userCredentials: UserCredentials
  ): Promise<AuthInterface> {
    const response = await apiResponse.post("auth/signup", userCredentials);

    console.log(response.data);

    if (response.status === 201) {
      enqueueSnackbar("Account Created Successfully", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },

        action: (key) => (
          <button onClick={() => closeSnackbar(key)}>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=""
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ),
      });
    }
    return response.data;
  }

  static async signIn(
    userCredentials: UserCredentials
  ): Promise<AuthInterface> {
    const response = await apiResponse.post("auth/signin", userCredentials, {
      withCredentials: true,
    });
    if (response.status === 200) {
      enqueueSnackbar("Account logged in Successfully", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },

        action: (key) => (
          <button onClick={() => closeSnackbar(key)}>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=""
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ),
      });
    }
 

    return response.data;
  }

  static async getActiveUser(): Promise<AuthInterface> {
    const response = await apiResponse.get("user/getactiveuser", {
      withCredentials: true,
    });
    return response.data?.user;
  }

  static async ForgotPassword(
    userCredentials: ForgotPasswordInt
  ): Promise<void> {
    const response = await apiResponse.post(
      "auth/forgotpassword",
      userCredentials
    );
    const message = response.data?.message;
    console.log(response.data);
    if (response.status === 200) {
      enqueueSnackbar(`${message}`, {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },

        action: (key) => (
          <button onClick={() => closeSnackbar(key)}>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=""
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ),
      });
    }
  }

  static async UpdatePassword(
    userCresidentials: UpdatePasswordInt
  ): Promise<void> {
    const response = await apiResponse.post(
      "auth/updatepassword",
      userCresidentials
    );
    const responsedata = response?.data?.message;
    console.log(response.data);
    if (response.status === 200) {
      enqueueSnackbar(`${responsedata}`, {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },

        action: (key) => (
          <button onClick={() => closeSnackbar(key)}>
            {" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=""
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-9-9m0 0L3 3m9 9l9-9m-9 9l-9 9"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ),
      });
    }
  }
}

export default AuthServices;
