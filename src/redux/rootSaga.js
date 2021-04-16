import { all } from "redux-saga/effects";
import actionWatcher from "./auth/saga";

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
