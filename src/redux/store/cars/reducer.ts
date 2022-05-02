import { CarDetails } from "../../../models/CarDetails";
import { RESET_CARS, SET_CARS, SET_MORE_CARS } from "./actionType";

const initialState: {cars: CarDetails[]} = {cars: []};

const CarsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CARS:
      const { cars } = action;
      return { ...state, cars };
    case SET_MORE_CARS:
      const nextCars = action.cars;
      return { ...state, cars: [...state.cars, ...nextCars]};
    case RESET_CARS: 
      return {...state, cars: []};
    default:
      return state;
  }
};

export default CarsReducer;