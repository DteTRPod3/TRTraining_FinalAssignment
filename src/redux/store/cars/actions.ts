import { CarDetails } from "../../../models/CarDetails";
import { GET_CARS, GET_MORE_CARS, RESET_CARS, SET_CARS, SET_MORE_CARS } from "./actionType";

export const getCars = (carType: string, used:boolean|null) => {
  return { type: GET_CARS, carType, used };
};

export const setCars = (cars: CarDetails[]) => {
  return {
    type: SET_CARS,
    cars: cars,
  };
};

export const setMoreCars = (cars: CarDetails[]) => {
  return {
    type: SET_MORE_CARS,
    cars: cars,
  };
};

export const getMoreCars = (carType: string, used:boolean|null) => {
  return { type: GET_MORE_CARS, carType, used };
};

export const resetCars = () => {
  return { type: RESET_CARS };
};
