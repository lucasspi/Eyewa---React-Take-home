import { put, takeLatest } from "redux-saga/effects";
// import { fetchDeezerApi } from "./service";

function* performDeezerApi(data) {
  yield put({ type: "PERFORM_LOADER", loading: true });
  // const response = yield call(fetchDeezerApi, data.payload);
}

export default function* actionWatcher() {
  yield takeLatest("PERFORM_AUTH", performDeezerApi);
}
