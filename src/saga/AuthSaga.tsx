import { call, put, takeLatest } from "redux-saga/effects";
import { AuthServices } from "@/services";
import { AuthInterface, ForgotPasswordInt, UpdatePasswordInt } from "@/types";
import {
  setUser,
  setLoading,
  logOut,
  setError,
  setNavigatetoverify,
  setGlobalLoading,
} from "@/reducers";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";

interface LoginAction {
  type: string;
  payload: {
    email: string;
    username: string;
    password: string;
  };
}


enum AuthRequest {
  SIGNUP = "AUTH/SIGNUP",
  SIGNIN = "AUTH/SIGNIN",
  GETCURRENTUSER = "AUTH/CURRENTUSER",
  FORGOTPASSWORD = "AUTH/FORGOTPASSWORD",
  UPDATEPASSWORD = "AUTH/UPDATEPASSWORD"
}
interface ForgotPasswordAction {
  type: typeof AuthRequest.FORGOTPASSWORD;
  payload: ForgotPasswordInt;
}


interface UpdatePasswordAction{
  type: typeof AuthRequest.UPDATEPASSWORD,
   payload: UpdatePasswordInt,
}

function* SignUpSaga(action: LoginAction) {
  
  try {
    yield put(setLoading(true));
    const user: AuthInterface = yield call(AuthServices.signup, action.payload);
   
     yield setTimeout(() => {
       put(setNavigatetoverify(true));
     }, 3000);

    if(typeof window !== "undefined"){
     window.location.href = "/auth/signin"
    }
  } catch (error: any) {
    yield put(setError(error));
    const errorresponsehtml = error?.response?.data;

    const start = errorresponsehtml.indexOf("Error: ") + "Error: ".length;
    const end = errorresponsehtml.indexOf("<br>");
    const errorMessage = errorresponsehtml.substring(start, end).trim();
    enqueueSnackbar(errorMessage, {
      variant: "error",
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
  } finally {
    yield put(setLoading(false));
  }
}

function* SigninSaga(action: LoginAction) {
  try {
    yield put(setLoading(true));
    const user: AuthInterface = yield call(AuthServices.signIn, action.payload);
    yield put(setUser(user));
     if(typeof window !== "undefined"){
     window.location.href = "/app/home"
    }

    
   
  } catch (error: any) {
    yield put(setError(error));
    const errorresponsehtml = error?.response?.data;

    const start = errorresponsehtml.indexOf("Error: ") + "Error: ".length;
    const end = errorresponsehtml.indexOf("<br>");
    const errorMessage = errorresponsehtml.substring(start, end).trim();
    enqueueSnackbar(errorMessage, {
      variant: "error",
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
  } finally {
    yield put(setLoading(false));
  }
}

function* getActiveUserSaga() {
  try {
    yield put(setGlobalLoading(true));
    const user: AuthInterface = yield call(AuthServices.getActiveUser);
    yield put(setUser(user));
    
  } catch (error: any) {
    yield put(setError(error));
  } finally {
      yield put(setGlobalLoading(false));
    yield put(setLoading(false));
  
  }
}

function* ForgotPasswordSaga(action: ForgotPasswordAction) {
  try {
    yield put(setLoading(true));
    const user: ForgotPasswordInt = yield call(
      AuthServices.ForgotPassword,
      action.payload
    );
  } catch (error: any) {
    yield put(setError(error));
     const errorresponsehtml = error?.response?.data;

     const start = errorresponsehtml.indexOf("Error: ") + "Error: ".length;
     const end = errorresponsehtml.indexOf("<br>");
     const errorMessage = errorresponsehtml.substring(start, end).trim();
     console.log(errorMessage);
     enqueueSnackbar(errorMessage, {
       variant: "error",
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
  } finally {
    yield put(setLoading(false));
  }
}

function* UpdatePasswordSaga(action: UpdatePasswordAction) {
 try {
   yield put(setLoading(true));
   const user: UpdatePasswordInt = yield call(AuthServices.UpdatePassword, action.payload)
 } catch (error:any) {
    const errorresponsehtml = error?.response?.data;

    const start = errorresponsehtml.indexOf("Error: ") + "Error: ".length;
    const end = errorresponsehtml.indexOf("<br>");
    const errorMessage = errorresponsehtml.substring(start, end).trim();
    enqueueSnackbar(errorMessage, {
      variant: "error",
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
 } finally {
    // yield put(setLoading(false));
 
 }
}
function* Signout() {
  try {
    yield put(logOut());
  } catch (error) {}
}

export function* WatchAuthSaga() {
  yield takeLatest(AuthRequest.SIGNUP, SignUpSaga);
  yield takeLatest(AuthRequest.GETCURRENTUSER, getActiveUserSaga);
  yield takeLatest(AuthRequest.SIGNIN, SigninSaga);
  yield takeLatest(AuthRequest.FORGOTPASSWORD, ForgotPasswordSaga);
  yield takeLatest(AuthRequest.UPDATEPASSWORD, UpdatePasswordSaga)
}

export const SignUpRequest = (credentials: AuthInterface) => ({
  type: AuthRequest.SIGNUP,
  payload: credentials,
});

export const SignInRequest = (credentials: AuthInterface) => ({
  type: AuthRequest.SIGNIN,
  payload: credentials,
});

export const ForgotPasswordRequest = (credentials: ForgotPasswordInt) => ({
  type: AuthRequest.FORGOTPASSWORD,
  payload: credentials,
});


export const UpdatePasswordRequest = (credentials: UpdatePasswordInt) => ({
  type: AuthRequest.UPDATEPASSWORD,
 payload: credentials,
})
// export const SignOutRequest = () => ({
//   type: AuthRequest.SIGNOUT,
// });
export const GetCurrentUserRequest = () => ({
  type: AuthRequest.GETCURRENTUSER,
});
