import { call, put } from "redux-saga/effects";
import { requestGetCarDetails, requestGetCars } from "../requests/cars";
import { setCars } from "../../store/cars/actions";
import { setCarDetails } from "../../store/carDetails/actions";

export function* handleGetCars(action: any): any {
  try {
    const response = yield call(() => requestGetCars(action.carType));
    const { data } = response;
    yield put(setCars(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCarDetails(action: any): any {
  try {
    const response = yield call(() => requestGetCarDetails(action.carid));
    const { data } = response;
    yield put(setCarDetails(data));
  } catch (error) {
    console.log(error);
  }
}
