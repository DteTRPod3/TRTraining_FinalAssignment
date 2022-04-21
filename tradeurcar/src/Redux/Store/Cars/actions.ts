import { CarDetails } from "../../../Models/CarDetails";
import { GET_CARS, SET_CARS } from "./actionType";

export const getCars = () => {
  return { type: GET_CARS };
};

export const setCars = (cars: CarDetails[]) => {
  // console.log("setUsers", users);
  return {
    type: SET_CARS,
    cars: cars,
  };
};
