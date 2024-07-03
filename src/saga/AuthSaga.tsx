import { call, put, takeLatest } from "redux-saga/effects";
import { AuthServices } from "@/services";
import { AuthInterface } from "@/types";
import { setUser, setLoading, logOut, setError } from "@/reducers";
import { SnackbarProvider, enqueueSnackbar, closeSnackbar } from "notistack";

interface LoginAction {
  type: string;
  payload: {
    email: string;
    username: string;
    password: string;
  };

}

interface Credentials {
  email: string;
  username: string;
  password: string;
};


enum AuthRequest {
  SIGNUP= "AUTH/SIGNUP",
  SIGNIN = "AUTH/SIGNIN",
  GETCURRENTUSER = "AUTH/CURRENTUSER"
}
function* SignUpSaga(action: LoginAction) {
  try {
    yield put(setLoading(true));
    const user: AuthInterface = yield call(AuthServices.signup, action.payload);
    yield put(setUser(user));
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
    yield put(setLoading(true))
  const user: AuthInterface = yield call(AuthServices.getActiveUser);
    yield put(setUser(user))
  } catch (error:any) {
    yield put(setError(error))
  } finally {
    yield put(setLoading(false))
  }
}
function* Signout() {
    try {
        
        yield put(logOut());
    } catch (error) {
        
    }
}

export function* WatchAuthSaga() {
  yield takeLatest(AuthRequest.SIGNUP, SignUpSaga);
  yield takeLatest(AuthRequest.GETCURRENTUSER, getActiveUserSaga)
    yield takeLatest(AuthRequest.SIGNIN, SigninSaga);
}


export const SignUpRequest = (credentials: AuthInterface) => ({
  type: AuthRequest.SIGNUP,
  payload: credentials,
});

export const SignInRequest = (credentials: AuthInterface) => ({
  type: AuthRequest.SIGNIN,
  payload: credentials,
});

export const GetCurrentUserRequest = () => ({
  type: AuthRequest.GETCURRENTUSER,
});