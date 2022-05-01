import { takeLatest } from "redux-saga/effects";
import { GET_CAR_DETAILS } from "../store/carDetails/actionType";
import { GET_ALL_CARS, GET_CARS, GET_MORE_CARS } from "../store/cars/actionType";
import { handleGetCarDetails, handleGetCars, handleGetMoreCars } from "./handler/cars";

export function* watcherSaga() {
  yield takeLatest(GET_CARS, handleGetCars);
  yield takeLatest(GET_ALL_CARS, handleGetCars);
  yield takeLatest(GET_CAR_DETAILS, handleGetCarDetails);
  yield takeLatest(GET_MORE_CARS, handleGetMoreCars);
}
