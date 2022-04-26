import { CarFullDetails } from "../../../models/CarFullDetails";
import { GET_CAR_DETAILS, SET_CAR_DETAILS } from "./actionType";

export const getCarDetails = (carid: string) => {
  return { type: GET_CAR_DETAILS, carid };
};

export const setCarDetails = (cardetails: CarFullDetails) => {
  return {
    type: SET_CAR_DETAILS,
    cardetails: cardetails,
  };
};
