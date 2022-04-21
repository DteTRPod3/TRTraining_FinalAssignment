import { CarDetails } from "../../../Models/CarDetails";
import { GET_CARS, SET_CARS } from "./actionType";

export const getCars = (carType: string) => {
  return { type: GET_CARS, carType };
};

export const setCars = (cars: CarDetails[]) => {
  return {
    type: SET_CARS,
    cars: cars,
  };
};
