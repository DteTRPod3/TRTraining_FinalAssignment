import { UserSignUpDetails } from "../../../models/User";
import { POST_SIGN_UP_DETAILS } from "./actionType";

export const postSignUpDetails = (userSignUpDetails: UserSignUpDetails) => {
  return {
    type: POST_SIGN_UP_DETAILS,
    userSignUpDetails: userSignUpDetails,
  };
};
