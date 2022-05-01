import { CarDetails } from "../../../models/CarDetails";
import { SET_CARS, SET_MORE_CARS } from "./actionType";

const initialState: CarDetails[] = [];

const CarsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CARS:
      const { cars } = action;
      return { ...state, cars };
    case SET_MORE_CARS:
      const nextCars = action.cars;
      console.log([...state, ...nextCars]);
      return { ...state, cars: [...state, ...nextCars]};
    default:
      return state;
  }
};

export default CarsReducer;