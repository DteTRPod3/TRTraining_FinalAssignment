import { SET_CARS } from "./actionType";
import { CarDetails } from "../../../Models/CarDetails";

const initialState: CarDetails[] = [];

const CarsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CARS:
      const { cars } = action;
      return { ...state, cars };
    default:
      return state;
  }
};

export default CarsReducer;
