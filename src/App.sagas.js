import {
  take,
  put,
  select,
  fork,
  cancel,
  takeLatest,
  all
} from "redux-saga/effects";
import Actions, { actionBuilder } from "./actions";
function* updateDiceCount(action) {
  // debugger;
  yield put(actionBuilder(Actions.updateDiceCountCompleted, action.payload));
}
function* updateDiceMax(action) {
  // debugger;
  yield put(actionBuilder(Actions.updateDiceMaxCompleted, action.payload));
}
function* updateRollCount(action) {
  // debugger;
  yield put(actionBuilder(Actions.updateRollCountCompleted, action.payload));
}
export default function* rootSaga() {
  yield takeLatest(Actions.updateDiceCount, updateDiceCount);
  yield takeLatest(Actions.updateDiceMax, updateDiceMax);
  yield takeLatest(Actions.updateRollCount, updateRollCount);
}
