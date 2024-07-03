import { all } from "redux-saga/effects";
import { WatchAuthSaga } from "./AuthSaga";

export default function* RootSaga() {
  yield all([
    WatchAuthSaga(), // Watch for authentication actions and handle them with the AuthSaga.
    // Add more sagas as needed.  Ensure that each saga is watched and handled appropriately.  This is a basic example.  In a real-world application, you might have more complex logic and effects.  Consult the Redux Saga documentation for more information.
  ]);
}
