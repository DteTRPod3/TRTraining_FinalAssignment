import { call, put } from "redux-saga/effects";
import { requestGetCars } from "../Requests/cars";
import { setCars } from "../../Store/Cars/actions";

export function* handleGetCars(action: any): any {
  try {
    const response = yield call(() => requestGetCars(action.carType));
    const { data } = response;
    yield put(setCars(data));
  } catch (error) {
    console.log(error);
  }
}
