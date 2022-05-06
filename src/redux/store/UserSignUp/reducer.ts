import { UserSignUpDetails } from "../../../models/User";
import { POST_SIGN_UP_DETAILS } from "./actionType";

const initialState: {
  userSignUpDetails: UserSignUpDetails;
} = {
  userSignUpDetails: {
    name: "",
    contact: "",
    address: "",
    pincode: "",
    email: "",
    password: "",
    confirmpassword: "",
  },
};
export const UserSignUpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_SIGN_UP_DETAILS:
      const { userSignUpDetails } = action;
      return { ...state, userSignUpDetails };
    default:
      return state;
  }
};
