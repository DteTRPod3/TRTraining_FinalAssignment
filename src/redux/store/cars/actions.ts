import { CarDetails } from "../../../models/CarDetails";
import { GET_ALL_CARS, GET_CARS, GET_MORE_CARS, SET_CARS, SET_MORE_CARS } from "./actionType";

export const getCars = (carType: string) => {
  return { type: GET_CARS, carType };
};

export const setCars = (cars: CarDetails[]) => {
  return {
    type: SET_CARS,
    cars: cars,
  };
};

export const getAllCars = () => {
  return { type: GET_ALL_CARS, carType: "" };
};

export const setMoreCars = (cars: CarDetails[]) => {
  return {
    type: SET_MORE_CARS,
    cars: cars,
  };
};

export const getMoreCars = (carType: string) => {
  return { type: GET_MORE_CARS, carType };
}; 
