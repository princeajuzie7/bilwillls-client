"use client";
import React from "react";
import Link from "next/link";
import {
  AuthInterface,
  RegexInterface,
  RegexError,
  ForgotPasswordInt,
} from "@/types";
import { EMAIL_REGEX, PASSWORD_REGEX, apiResponse } from "@/utils";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPasswordRequest } from "@/saga/AuthSaga";
import { selectLoading } from "@/selectors/AuthSelectors";
export default function Page() {
  const [FormData, setFormData] = React.useState<ForgotPasswordInt>({
    email: "",
  });

  const [Errormsg, setErrormsg] = React.useState<RegexError>({
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  function SignuValidate(Regexprops: RegexInterface): void {
    // Check if the value matches the regular expression pattern w
    if (!Regexprops.regex.test(Regexprops.value)) {
      // If validation fails, update error message for the input field
      setErrormsg((prevs: RegexError) => ({
        ...prevs,
        [Regexprops.fieldname]: Regexprops.errormessage,
      }));
    } else {
      // If validation succeeds, clear error message for the input field
      setErrormsg((prevs: RegexError) => ({
        ...prevs,
        [Regexprops.fieldname]: "",
      }));
    }
  }

  const allFieldisValid = Object.keys(Errormsg).every(
    (field) => !Errormsg[field as keyof typeof Errormsg]
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    dispatch(ForgotPasswordRequest(FormData));
  };
  return (
    <main className="flex items-center justify-center">
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <div className="grid place-items-center fixed w-screen h-screen z-[-10] bg-black bg-opacity-50  inset-0"></div>
      <section
        className="backdrop-blur-3xl"
        style={{
          backgroundImage: `url(/bgauth.jpg)`, // Set background image
          backgroundSize: "cover", // Make the background image cover the entire element
          backgroundPosition: "top center",
          position: "fixed", // Center the background image
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -12,
          width: "100vw",
          filter: "blur(1.5px)",
        }}
      ></section>
      <div className="w-full max-w-md m-auto p-4  h-screen flex flex-col justify-center">
        <div
          className="  rounded-xl shadow-sm"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.7)`,
          }}
        >
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Remember your password?
                <Link
                  className="text-[#3EE783] decoration-2 hover:underline font-medium"
                  href="/auth/signin"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          handleInputChange(event);
                          const regexProps: RegexInterface = {
                            fieldname: "email",
                            regex: EMAIL_REGEX,
                            value: event.target.value,
                            errormessage:
                              "Please include a valid email address",
                          };
                          SignuValidate(regexProps);
                        }}
                        className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>

                    {Errormsg.email && FormData.email && (
                      <p
                        className=" text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        {Errormsg.email}
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  <button
                    type="submit"
                    disabled={!allFieldisValid || loading}
                    className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${
                      allFieldisValid ? " cursor-pointer" : "cursor-not-allowed"
                    }  ${
                      loading
                        ? "cursor-not-allowed bg-[#3EE783] opacity-10 "
                        : "bg-[#3EE783]"
                    } text-white hover:bg-[#3EE783] disabled:opacity-50 `}
                  >
                    Reset Password
                    {loading && (
                      <svg
                        className="c-button-spinner -ml-1 mr-3 h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
