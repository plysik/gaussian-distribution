import { put, takeLatest } from "redux-saga/effects";
import Actions, { actionBuilder } from "./actions";
function* updateDiceCount(action) {
  yield put(actionBuilder(Actions.updateDiceCountCompleted, action.payload));
}
function* updateDiceMax(action) {
  yield put(actionBuilder(Actions.updateDiceMaxCompleted, action.payload));
}
function* updateRollCount(action) {
  yield put(actionBuilder(Actions.updateRollCountCompleted, action.payload));
}
export default function* rootSaga() {
  yield takeLatest(Actions.updateDiceCount, updateDiceCount);
  yield takeLatest(Actions.updateDiceMax, updateDiceMax);
  yield takeLatest(Actions.updateRollCount, updateRollCount);
}
