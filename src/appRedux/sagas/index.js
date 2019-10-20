import {all} from "redux-saga/effects";
import genericSaga from "./Generic";

export default function* rootSaga(getState) {
  yield all([
    genericSaga(),
  ]);
}
