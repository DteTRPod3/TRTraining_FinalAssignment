import { takeLatest } from "redux-saga/effects";
import { GET_CAR_DETAILS } from "../store/carDetails/actionType";
import { GET_CARS } from "../store/cars/actionType";
import { handleGetCarDetails, handleGetCars } from "./handler/cars";

export function* watcherSaga() {
  yield takeLatest(GET_CARS, handleGetCars);
  yield takeLatest(GET_CAR_DETAILS, handleGetCarDetails);
}
