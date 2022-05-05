import { UserSignUpDetails } from "../../../../models/User";
import { POST_SIGN_UP_DETAILS } from "./actionType";

const initialState: {
  userSignUpDetails: UserSignUpDetails;
  isAuthenticated: boolean;
} = {
  userSignUpDetails: {},
  isAuthenticated: false,
};
export const UserSignUpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POST_SIGN_UP_DETAILS:
      const { userSignUpDetails } = action;
      return { ...state, userSignUpDetails, isAuthenticated: true };
    default:
      return state;
  }
};
