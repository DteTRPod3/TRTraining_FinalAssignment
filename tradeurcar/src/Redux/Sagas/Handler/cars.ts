import { call, put } from "redux-saga/effects";
import { requestGetCarDetails, requestGetCars } from "../Requests/cars";
import { setCars } from "../../Store/Cars/actions";
import { setCarDetails } from "../../Store/CarDetails/actions";

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
