import { takeLatest } from "redux-saga/effects";
import { GET_CARS } from "../Store/Cars/actionType";
import { handleGetCars } from "./Handler/cars";

export function* watcherSaga() {
  yield takeLatest(GET_CARS, handleGetCars);
}
