"use client";
import React, { FormEventHandler } from "react";
import Link from "next/link";
import { AuthInterface, RegexInterface, RegexError } from "@/types";
import { EMAIL_REGEX, PASSWORD_REGEX, apiResponse } from "@/utils";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useRouter } from "next/navigation";
import { SignInRequest, SignUpRequest } from "@/saga/AuthSaga";
import { selectLoading, selectnavigatetoverify } from "@/selectors/AuthSelectors";

const Page = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading)
  const navigatetoverify = useSelector(selectnavigatetoverify);

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let newhex = "";
      for (let i = 0; i < 6; i++) {
        newhex += letters[Math.floor(Math.random() * 16)];
      }
      while (newhex === "#FFFFFF") console.log(newhex);
      return newhex;
    }
    const [backgroundColor, setBackgroundColor] = React.useState(
      getRandomColor()
    );
  
  /**
   * a state for form collection specific for auth signup
   * @param FormData a data that will be sent to the server
   *   -emaii: the users email address
   *    -username: the username of the user
   *  -password: the password of the user
   */
  const [FormData, setFormData] = React.useState<AuthInterface>({
    email: "",
    password: "",
    username: "",
  });


 
  const [error, seterror] = React.useState<string>("");

  const [fullName, setFullname] = React.useState<string>("");

  const [Errormsg, setErrormsg] = React.useState<RegexError>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      const newusername: string = value.substring(0, value.indexOf("@"));
       const cleanedUsername = newusername.replace(/\d+/g, "");
      setFullname(cleanedUsername);
    }
     const userdpvalue = `https://eu.ui-avatars.com/api/?name=${
       FormData.username
     }&background=${backgroundColor && backgroundColor}&color=ffffff`;

    setFormData({
      ...FormData,
      username: fullName,
      userdp: userdpvalue,
      [name]: value,
    });
  };

  /**
   * Validates a form input value against a regular expression pattern and updates error messages accordingly.
   * @param Regexprops An object containing properties for the validation:
   *                   - fieldname: The name of the input field being validated.
   *                   - regex: The regular expression pattern used for validation.
   *                   - value: The value to be validated.
   *                   - errormessage: The error message to be displayed if the validation fails.
   * @returns void
   */
  function SignuValidate(Regexprops: RegexInterface): void {
    // Check if the value matches the regular expression pattern
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
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
      dispatch(SignUpRequest(FormData));
     console.log("FormData", FormData);
   
  };

  const GoogleSign = async () => {
    console.log('google button clicked')
   
  

    try {

      window.location.href = "http://localhost:8000/client/api/auth/google";
    
      //  const googleLoginUrl =;
      //  const newWindow = window.open(
      //    googleLoginUrl,
      //    "_blank",
      //    "width=500, height=600"
      //  );

     
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <main className="flex items-center justify-center">
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <div className="grid place-items-center fixed w-screen h-screen z-[-10] bg-black bg-opacity-50 inset-0"></div>
      <section
        className=" "
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
        <>
          <div
            id="cookies-with-stacked-buttons"
            className="  fixed bottom-0 end-0 z-[10] sm:max-w-sm w-full mx-auto p-6"
          >
            {/* Card */}
            <div
              className="p-4  backdrop-blur-lg rounded-xl shadow-2xl"
              style={{
                backgroundColor: `rgba(0, 0, 0, 0.7)`,
              }}
            >
              <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
                <h2 className="font-semibold text-white">Cookie Settings</h2>
                <button
                  type="button"
                  className="inline-flex rounded-full p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600"
                  data-hs-remove-element="#cookies-with-stacked-buttons"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm text-white">
                We use cookies to improve your experience and for marketing.
                Visit our{" "}
                <a
                  className="inline-flex items-center gap-x-1.5 text-[#3EE783] decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Cookies Policy
                </a>{" "}
                to learn more.
              </p>
              <div className="mt-5 mb-2 w-full flex gap-x-2">
                <div className="grid w-full">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#3EE783] text-white hover:bg-[#3EE783] hover:opacity-1 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Allow all
                  </button>
                </div>
                <div className="grid w-full">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#3EE783] text-white hover:bg-[#3EE783] hover:opacity-5 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Reject all
                  </button>
                </div>
              </div>
              <div className="grid w-full">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Manage cookies
                </button>
              </div>
            </div>
            {/* End Card */}
          </div>
          <svg
            className="absolute bottom-0 end-0 -z-[1]"
            width={273}
            height={250}
            viewBox="0 0 273 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1727_230)">
              <path
                d="M274.983 42.5186C261.682 42.5186 248.926 47.8596 239.521 57.3668C230.116 66.874 224.833 79.7685 224.833 93.2137C224.833 106.659 230.116 119.553 239.521 129.061C248.926 138.568 261.682 143.909 274.983 143.909L274.983 120.374C267.857 120.374 261.023 117.512 255.984 112.419C250.945 107.325 248.114 100.417 248.114 93.2137C248.114 86.0103 250.945 79.1021 255.984 74.0085C261.023 68.915 267.857 66.0535 274.983 66.0535L274.983 42.5186Z"
                fill="#4CAF50"
              />
              <path
                d="M274.982 0C250.405 -2.94804e-07 226.835 9.82069 209.456 27.3016C192.077 44.7826 182.314 68.4918 182.314 93.2136C182.314 117.935 192.077 141.645 209.456 159.126C226.835 176.606 250.405 186.427 274.982 186.427L274.982 143.153C261.815 143.153 249.187 137.892 239.876 128.526C230.566 119.161 225.335 106.458 225.335 93.2136C225.335 79.9688 230.566 67.2664 239.876 57.9009C249.187 48.5354 261.815 43.274 274.982 43.274L274.982 0Z"
                fill="#2E8B57"
              />
              <circle
                cx="214.475"
                cy="222.95"
                r="59.962"
                transform="rotate(180 214.475 222.95)"
                stroke="#34A853"
                strokeWidth="3.27065"
              />
              <circle
                cx="214.476"
                cy="222.95"
                r="49.0598"
                transform="rotate(180 214.476 222.95)"
                stroke="#34A853"
                strokeWidth="3.27065"
              />
              <circle
                cx="214.475"
                cy="222.95"
                r="39.2478"
                transform="rotate(180 214.475 222.95)"
                stroke="#34A853"
                strokeWidth="3.27065"
              />
              <circle
                cx="214.476"
                cy="222.949"
                r="28.3457"
                transform="rotate(180 214.476 222.949)"
                stroke="#34A853"
                strokeWidth="3.27065"
              />
              <circle
                cx="214.475"
                cy="222.95"
                r="17.4435"
                transform="rotate(180 214.475 222.95)"
                stroke="#34A853"
                strokeWidth="3.27065"
              />
              <circle
                cx="214.476"
                cy="222.949"
                r="7.63152"
                transform="rotate(180 214.476 222.949)"
                stroke="#4CAF50"
                strokeWidth="3.27065"
              />
              <rect
                x="193.216"
                y="180.976"
                width="55.6011"
                height="40.338"
                transform="rotate(180 193.216 180.976)"
                fill="#34A853"
              />
              <path
                d="M137.615 235.487L137.615 179.886L193.216 179.886L137.615 235.487Z"
                fill="#2E8B57"
              />
              <path
                d="M53.3108 199.749L108.476 110.517L163.642 199.749H53.3108Z"
                stroke="#2E8B57"
                strokeWidth="2.18043"
              />
              <path
                d="M65.9582 91L123.08 182.578H8.83672L65.9582 91Z"
                fill="#2E8B57"
              />
            </g>
            <defs>
              <clipPath id="clip0_1727_230">
                <rect width={273} height={250} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </>
        {navigatetoverify ? (
          <div
            className=" rounded-xl shadow-sm"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.7)`,
            }}
          >
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-white">Sign up</h1>
                <p className="mt-2 text-sm text-white">
                  Experience A Better Way To Manage Teams or personal task today
                  using Efficysync 😜.
                </p>
              </div>
              <div className="mt-5">
                <div className="flex items-center text-center gap-2">
                  <p className="mt-2 text-sm text-white">
                    📨 Please check your email and click on link to sign in.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?
                  <Link
                    className="text-[#3EE783] decoration-2 hover:underline font-medium"
                    href="/auth/signin"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="  border-gray-200 rounded-xl shadow-sm"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.7)`,
            }}
          >
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-white">Sign up</h1>
                <p className="mt-2 text-sm text-white">
                  Experience the best way to watch movie today using bilwills 😉
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
                          className="py-3 px-4 block w-full border-gray-500 border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            handleInputChange(event);
                            const regexProps: RegexInterface = {
                              fieldname: "email",
                              regex: EMAIL_REGEX,
                              value: event.target.value,
                              errormessage:
                                "Please include a valid email address so we can get back to you",
                            };
                            SignuValidate(regexProps);
                          }}
                          // aria-describedby="email-error"
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
                    {/* Form Group */}
                    <div>
                      <label htmlFor="password" className="block text-sm mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 block w-full border-gray-500  border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          required
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            handleInputChange(event);
                            const regexProps: RegexInterface = {
                              fieldname: "password",
                              regex: PASSWORD_REGEX,
                              value: event.target.value,
                              errormessage: "8+ characters required",
                            };
                            SignuValidate(regexProps);
                          }}
                          // aria-describedby="password-error"
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
                      {Errormsg.password && FormData.password && (
                        <p
                          className=" text-xs text-red-600 mt-2"
                          id="password-error"
                        >
                          {Errormsg.password}
                        </p>
                      )}
                    </div>
                    {/* End Form Group */}
                    {/* Form Group */}

                    {/* End Form Group */}
                    {/* Checkbox */}
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          className="custom-checkbox"
                          type="checkbox"
                        />
                      </div>
                      <div className="ms-3">
                        <label htmlFor="remember-me" className="text-sm">
                          I accept the{" "}
                          <a
                            className="text-[#3EE783] decoration-2 hover:underline font-medium"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    {/* End Checkbox */}
                    <button
                      type="submit"
                      disabled={!allFieldisValid || loading}
                      className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ${
                        allFieldisValid
                          ? " cursor-pointer"
                          : "cursor-not-allowed"
                      }  ${
                        loading
                          ? "cursor-not-allowed bg-[#3EE783] opacity-10 "
                          : "bg-[#3EE783]"
                      } text-white hover:bg-[#3EE783] disabled:opacity-50 `}
                    >
                      Sign up
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
                    <div className="text-center">
                      <p className="mt-2 text-sm text-gray-600">
                        Already have an account?
                        <Link
                          className="text-[#3EE783] decoration-2 hover:underline font-medium"
                          href="/auth/signin"
                        >
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
