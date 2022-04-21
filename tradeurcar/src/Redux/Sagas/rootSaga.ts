import { takeLatest } from "redux-saga/effects";
import { GET_CAR_DETAILS } from "../Store/CarDetails/actionType";
import { GET_CARS } from "../Store/Cars/actionType";
import { handleGetCarDetails, handleGetCars } from "./Handler/cars";

export function* watcherSaga() {
  yield takeLatest(GET_CARS, handleGetCars);
  yield takeLatest(GET_CAR_DETAILS, handleGetCarDetails);
}
