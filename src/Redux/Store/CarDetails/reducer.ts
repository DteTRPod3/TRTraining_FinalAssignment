import { CarFullDetails } from "../../../models/CarFullDetails";
import { SET_CAR_DETAILS } from "./actionType";

const initialState: CarFullDetails = {
  cost: "",
  specifications: {
    name: "",
    fuel_type: "",
    engine_cc: "",
    torque: "",
    acceleration: "",
    top_speed: "",
    variant: [],
    image: "",
  },
  exterior: {
    length: "",
    width: "",
    color: "",
    image: "",
  },
  interior: {
    text: [],
    color: "",
    image1: "",
    image2: "",
  },
};

const CarDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAR_DETAILS:
      const { cardetails } = action;
      return { ...state, cardetails };
    default:
      return state;
  }
};

export default CarDetailsReducer;
