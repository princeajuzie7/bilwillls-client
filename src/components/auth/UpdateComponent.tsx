"use client";
import React from "react";
import Link from "next/link";
import { AuthInterface, RegexInterface, RegexError, UpdatePasswordInt } from "@/types";
import { EMAIL_REGEX, PASSWORD_REGEX, apiResponse } from "@/utils";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";
import { useSearchParams } from "next/navigation";
import { UseAppDispatch } from "@/hooks";
import { UpdatePasswordRequest } from "@/saga/AuthSaga";
import { useRouter } from "next/navigation"
import { selectLoading, selectnavigatetoverify } from "@/selectors/AuthSelectors";
import { useSelector } from "react-redux";

export function UpdateComponent() {
  const params = useSearchParams();
  const router = useRouter()
  const token = params.get("token");
  const loading = useSelector(selectLoading)
  // const email = params.get("email");
  const dispatch = UseAppDispatch()
  const [formData, setFormdata] = React.useState<UpdatePasswordInt>({
    password: "",
    confirmpassword: "",
    token: token,
  });

  // const [loading, setLoading] = React.useState<boolean>(false);

  const [errorMsg, seterrorMsg] = React.useState({
    password: "",
    confirmpassword: "",
  });

  const [confirmpassword, setConfirmpassword] = React.useState("");
  const handleInputChange = (Event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = Event.target;

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const SignupValidate = (regexprops: RegexInterface) => {
    if (!regexprops.regex.test(regexprops.value)) {
      seterrorMsg((errorprops) => ({
        ...errorprops,
        [regexprops.fieldname]: regexprops.errormessage,
      }));
    } else {
      seterrorMsg((errorprops) => ({
        ...errorprops,
        [regexprops.fieldname]: "",
      }));
    }
  };

  const allFieldisValid = Object.keys(errorMsg).every(
    (field) => !errorMsg[field as keyof typeof errorMsg]
  );

  

  React.useEffect(() => {
    const verifyEmail = async () => {
      try {
        // setLoading(true);
        const response = await apiResponse.post(
          `auth/verifypasswordresetoken`,
          {
            token: token,
          }
        );

        const data = response.data;

        if (response.status === 200) {
          console.log("data", data);
          
        
          return;
        } else {
          
          router.push('/auth/signup')
        }

      } catch (error: any) {
        console.log(error);
       
      
      }
    };

    verifyEmail();
  }, [token, router]);

  const HandleSubmit = async (Event: React.FormEvent<HTMLFormElement>) => {
    Event.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      setConfirmpassword("password not match");
    }
    setConfirmpassword("");

    // const response = await apiResponse.post("/auth/signup", formData);

    // const data = response.data;
    dispatch(UpdatePasswordRequest(formData));

  };
  return (
    <main className="flex items-center justify-center">
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <div className="grid place-items-center fixed w-screen h-screen z-[-10] bg-black bg-opacity-50  inset-0"></div>
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
        <div
          className="  rounded-xl shadow-sm"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.7)`,
          }}
        >
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-white">
                Update Password
              </h1>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form onSubmit={HandleSubmit}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="newpassword"
                        className="block text-sm mb-2"
                      >
                        New Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
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
                          SignupValidate(regexProps);
                        }}
                        className="py-3 border-[1px] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="password-error"
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
                    {errorMsg.password && formData.password && (
                      <p
                        className=" text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        {errorMsg.password}
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="block text-sm mb-2">
                        Confim Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          handleInputChange(event);
                          const regexProps: RegexInterface = {
                            fieldname: "password",
                            regex: PASSWORD_REGEX,
                            value: event.target.value,
                            errormessage: "",
                          };
                          SignupValidate(regexProps);
                        }}
                        className="py-3 border-[1px] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="password-error"
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
                    <p className=" text-xs text-red-600 mt-2">
                      {confirmpassword}
                    </p>
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
                    Update Password
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
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    Remeber your password?
                    <Link
                      className="text-[#3EE783] decoration-2 hover:underline font-medium"
                      href="/auth/signin"
                    >
                      Login here
                    </Link>
                  </p>
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

export default UpdateComponent;
